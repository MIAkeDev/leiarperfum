create table if not exists public.products (
    id integer primary key,
    name text not null,
    category text not null check (category in ('hombre', 'mujer', 'unisex', 'premium')),
    price numeric(10, 2) not null check (price >= 0),
    description text not null default '',
    color text not null default '#ffffff',
    badge text not null default '',
    popularity integer not null default 0,
    details text not null default '',
    image text not null default '',
    active boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

alter table public.products enable row level security;

drop policy if exists "Public can read active products" on public.products;
create policy "Public can read active products"
on public.products for select
to anon
using (active = true);

revoke insert, update, delete on public.products from anon;
grant select on public.products to anon;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

drop trigger if exists products_set_updated_at on public.products;
create trigger products_set_updated_at
before update on public.products
for each row execute function public.set_updated_at();

-- Identificadores automaticos para productos creados desde el panel.
create sequence if not exists public.products_id_seq;
select setval(
    'public.products_id_seq',
    coalesce((select max(id) from public.products), 0) + 1,
    false
);
alter sequence public.products_id_seq owned by public.products.id;
alter table public.products alter column id set default nextval('public.products_id_seq');

-- Solo los usuarios incluidos aqui pueden administrar el catalogo.
create table if not exists public.admin_users (
    user_id uuid primary key references auth.users(id) on delete cascade,
    created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;

drop policy if exists "Admins can read their membership" on public.admin_users;
create policy "Admins can read their membership"
on public.admin_users for select
to authenticated
using (user_id = (select auth.uid()));

drop policy if exists "Admins can insert products" on public.products;
create policy "Admins can insert products"
on public.products for insert
to authenticated
with check (exists (
    select 1 from public.admin_users where user_id = (select auth.uid())
));

drop policy if exists "Admins can read all products" on public.products;
create policy "Admins can read all products"
on public.products for select
to authenticated
using (exists (
    select 1 from public.admin_users where user_id = (select auth.uid())
));

drop policy if exists "Admins can update products" on public.products;
create policy "Admins can update products"
on public.products for update
to authenticated
using (exists (
    select 1 from public.admin_users where user_id = (select auth.uid())
))
with check (exists (
    select 1 from public.admin_users where user_id = (select auth.uid())
));

drop policy if exists "Admins can delete products" on public.products;
create policy "Admins can delete products"
on public.products for delete
to authenticated
using (exists (
    select 1 from public.admin_users where user_id = (select auth.uid())
));

grant select, insert, update, delete on public.products to authenticated;
grant select on public.admin_users to authenticated;
grant usage, select on sequence public.products_id_seq to authenticated;

-- Las imagenes son publicas para poder mostrarlas en la tienda, pero solo un
-- administrador autenticado puede subirlas, cambiarlas o borrarlas.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
    'product-images',
    'product-images',
    true,
    5242880,
    array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update set
    public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Admins can upload product images" on storage.objects;
create policy "Admins can upload product images"
on storage.objects for insert
to authenticated
with check (
    bucket_id = 'product-images'
    and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
);

drop policy if exists "Admins can update product images" on storage.objects;
create policy "Admins can update product images"
on storage.objects for update
to authenticated
using (
    bucket_id = 'product-images'
    and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
)
with check (
    bucket_id = 'product-images'
    and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
);

drop policy if exists "Admins can delete product images" on storage.objects;
create policy "Admins can delete product images"
on storage.objects for delete
to authenticated
using (
    bucket_id = 'product-images'
    and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
);
