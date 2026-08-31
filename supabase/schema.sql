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






-- Catálogo independiente de relojes.
create table if not exists public.watches (
    id integer primary key,
    name text not null,
    category text not null check (category in ('hombre', 'mujer', 'unisex')),
    style text not null check (style in ('elegante', 'cronografo', 'diver', 'automatico', 'smartwatch')),
    price numeric(10, 2) not null check (price >= 0),
    description text not null default '',
    details text not null default '',
    image text not null default '',
    color text not null default '#c9794d',
    badge text not null default '',
    popularity integer not null default 0,
    active boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create sequence if not exists public.watches_id_seq;
select setval('public.watches_id_seq', coalesce((select max(id) from public.watches), 0) + 1, false);
alter sequence public.watches_id_seq owned by public.watches.id;
alter table public.watches alter column id set default nextval('public.watches_id_seq');
alter table public.watches enable row level security;

drop trigger if exists watches_set_updated_at on public.watches;
create trigger watches_set_updated_at before update on public.watches
for each row execute function public.set_updated_at();

drop policy if exists "Public can read active watches" on public.watches;
create policy "Public can read active watches" on public.watches for select to anon using (active = true);
drop policy if exists "Admins can read all watches" on public.watches;
create policy "Admins can read all watches" on public.watches for select to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())));
drop policy if exists "Admins can insert watches" on public.watches;
create policy "Admins can insert watches" on public.watches for insert to authenticated
with check (exists (select 1 from public.admin_users where user_id = (select auth.uid())));
drop policy if exists "Admins can update watches" on public.watches;
create policy "Admins can update watches" on public.watches for update to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())))
with check (exists (select 1 from public.admin_users where user_id = (select auth.uid())));
drop policy if exists "Admins can delete watches" on public.watches;
create policy "Admins can delete watches" on public.watches for delete to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

grant select on public.watches to anon;
grant select, insert, update, delete on public.watches to authenticated;
grant usage, select on sequence public.watches_id_seq to authenticated;

insert into public.watches (id,name,category,style,price,description,details,image,color,badge,popularity)
values
 (1,'Aureus Chrono Gold','hombre','cronografo',349,'Cronógrafo dorado con presencia y acabado sofisticado.','Caja metálica, esfera negra de alto contraste y brazalete dorado. Una pieza protagonista para reuniones, celebraciones y looks formales.','aureus-chrono.jpg','#c9784a','Premium',95),
 (2,'Nocturne Steel Skeleton','hombre','automatico',429,'Mecánica visible y carácter oscuro para quien aprecia cada detalle.','Diseño skeleton en tono gunmetal, movimiento automático y construcción de estética industrial contemporánea.','nocturne-steel.jpg','#262b2c','Automático',93),
 (3,'Azure Diver 200','unisex','diver',389,'Azul profundo, bisel deportivo y una lectura limpia en movimiento.','Inspirado en relojes de buceo, con marcadores luminosos y brazalete metálico. Versátil para el día a día y escapadas.','azure-diver.jpg','#1469a5','Deportivo',91),
 (4,'Rose Atelier','mujer','elegante',279,'Delicado tono rose gold con una silueta femenina y moderna.','Esfera luminosa, caja estilizada y brazalete pulido. Diseñado para elevar un outfit sin perder sutileza.','rose-atelier.jpg','#d8a48d','Elegante',89),
 (5,'Terra Automatic','hombre','automatico',369,'Esfera verde y correa de cuero: equilibrio entre tradición y tendencia.','Estética clásica de inspiración viajera, movimiento automático y combinación cálida para vestir casual o formal.','terra-automatic.jpg','#486452','Clásico',87),
 (6,'Pulse X1 Active','unisex','smartwatch',249,'Tecnología deportiva con energía, métricas y estilo urbano.','Pantalla de alta visibilidad, modos deportivos y correa cómoda para acompañarte desde el entrenamiento hasta la ciudad.','pulse-x1.jpg','#ef6c32','Smart',90)
on conflict (id) do nothing;

select setval('public.watches_id_seq', coalesce((select max(id) from public.watches), 0) + 1, false);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('watch-images','watch-images',true,5242880,array['image/jpeg','image/png','image/webp','image/gif'])
on conflict (id) do update set public=excluded.public,file_size_limit=excluded.file_size_limit,allowed_mime_types=excluded.allowed_mime_types;

drop policy if exists "Admins can upload watch images" on storage.objects;
create policy "Admins can upload watch images" on storage.objects for insert to authenticated
with check (bucket_id='watch-images' and exists (select 1 from public.admin_users where user_id=(select auth.uid())));
drop policy if exists "Admins can update watch images" on storage.objects;
create policy "Admins can update watch images" on storage.objects for update to authenticated
using (bucket_id='watch-images' and exists (select 1 from public.admin_users where user_id=(select auth.uid())))
with check (bucket_id='watch-images' and exists (select 1 from public.admin_users where user_id=(select auth.uid())));
drop policy if exists "Admins can delete watch images" on storage.objects;
create policy "Admins can delete watch images" on storage.objects for delete to authenticated
using (bucket_id='watch-images' and exists (select 1 from public.admin_users where user_id=(select auth.uid())));
