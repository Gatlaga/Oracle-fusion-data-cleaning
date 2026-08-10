# Asset & Item Баталгаажуулах хэрэгсэл

Oracle Fusion рүү оруулахаас өмнө fixed asset болон item list-ийг 16 алба нэгжийн менежерүүдээр цэгцлүүлж, баталгаажуулах веб хэрэгсэл.

## 1. Supabase төслөө үүсгэх (5 мин)

1. https://supabase.com руу орж үнэгүй бүртгүүлнэ (GitHub-аар нэвтэрч болно).
2. "New project" дарж нэр өгнө (жишээ: `asset-cleanup`), database password үүсгэнэ (хадгалж авах).
3. Төсөл үүсэх хүртэл ~2 мин хүлээнэ.
4. Зүүн талын **SQL Editor** руу орж, `schema.sql` файлын бүх агуулгыг paste хийгээд **Run** дарна. Энэ нь 5 хүснэгт (departments, father_assets, child_assets, items, links) үүсгэнэ.
5. **Project Settings -> API** руу орж:
   - `Project URL` — жишээ: `https://abcdefgh.supabase.co`
   - `anon public` key
   эдгээрийг хуулж авна.

## 2. Кодод холбох

`index.html` файлыг нээгээд эхний хэсэгт:

```js
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
```

гэснийг өөрийн Supabase-ийн URL, anon key-ээр солино.

## 3. GitHub дээр repository үүсгэх

```bash
cd asset-tool
git init
git add .
git commit -m "Asset cleanup tool"
git branch -M main
git remote add origin https://github.com/<таны-username>/asset-cleanup.git
git push -u origin main
```

(Эсвэл GitHub Desktop ашиглаж болно.)

## 4. Vercel дээр deploy хийх (5 мин)

1. https://vercel.com руу GitHub account-аараа нэвтэрнэ.
2. "Add New -> Project" дараад дээрх GitHub repo-гоо сонгоно.
3. Framework Preset: **Other** (build command хэрэггүй, учир нь plain HTML).
4. "Deploy" дарна — 1 минутын дараа `https://asset-cleanup-xxxx.vercel.app` гэсэн линк гарна.
5. Энэ линкийг 16 менежерт илгээнэ.

## Item-ийн статус ажиллагаа (шинэ)

- Импортлохдоо Тайлбар баганаас `хасах`, `давхард`, `хэрэглэхгүй`, `утгах` гэх мэт түлхүүр үг илэрвэл item автоматаар **"Хасах санал"** төлөвт орно.
- Бүх item эхэндээ **эзэмшигчгүй** байдлаар ордог (эх файлын алба нэгжийн лавлагааг зөвхөн санал болгож харуулна, автоматаар оноохгүй) — менежер өөрөө "Миний" гэж claim хийж баталгаажуулна.
- Item-ийг "Идэвхтэй" төлөвт шилжүүлэхийн өмнө Category/Min/Max/UOM 4 талбар заавал бөглөгдсөн байх ёстой (веб апп үүнийг шалгаж, дутуу бол алдаа өгнө).
- Экспорт хийхэд "Устгах" болон "Хасах санал" төлөвтэй item-үүд эцсийн Item холболт файлаас автоматаар шүүгдэж орохгүй.

## Санамж

- Веб апп-ын дата бүгд Supabase дээр **shared** байдлаар хадгалагдана — хэн ч ямар ч цагт орж ажиллаж болно, бүгд нэг л датаг харна.
- Supabase Free tier: 500MB DB, 50,000 идэвхтэй хэрэглэгч/сар — таны хэмжээний датад бүрэн хангалттай.
- **Анхаарах:** Supabase-ийн үнэгүй project 7 хоног хэрэглэгдэхгүй бол автоматаар "pause" болно (дата algадахгүй, dashboard-с "Resume" дарна). 4 хоногийн идэвхтэй ажилд асуудалгүй.
- `anon key` нь public тул хэн ч апп-ын кодоос харж чадна — гэхдээ энэ бол зөвхөн дотоод, нэвтрэлт шаардахгүй жижиг tool тул зохимжтой. Ирээдүйд илүү нууцлал хэрэгтэй бол Supabase Auth нэмж болно.
