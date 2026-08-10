# HSK1 Flashcards

Static PWA สำหรับฝึกคำศัพท์จีนจากบทเรียนใน [chinese.icejuk.dev](https://chinese.icejuk.dev/) พร้อม pinyin คำแปลภาษาไทย/อังกฤษ และเสียงอ่านภาษาจีนจาก Web Speech API

## การใช้งาน

- เปิดหน้าแรกเพื่อเข้า flashcards
- กด `เริ่ม` เพื่อให้ระบบอ่านภาษาจีนตามด้วยคำแปลไทย และเปลี่ยนใบอัตโนมัติทุก 5 วินาที
- ใช้ปุ่มหรือ swipe เพื่อเปลี่ยนคำศัพท์
- ใช้ `S` เพื่อสุ่มชุดคำศัพท์ และปุ่มความเร็วเพื่อปรับความเร็วเสียง

แอปใช้ snapshot คำศัพท์ 15 บท รวม 285 รายการจากเว็บต้นทาง และทำงานทั้งหมดใน browser ไม่มี backend หรือฐานข้อมูล; เสียงอ่านขึ้นกับเสียงภาษาจีน/ไทยที่ติดตั้งในอุปกรณ์ โดยเสียงไทยจะเร็วกว่าเสียงจีนเล็กน้อย

## Deploy บน Vercel

โปรเจกต์นี้เป็น static site จึงไม่ต้องใช้ build command หรือ environment variables:

1. Import repository นี้ใน Vercel
2. ตั้ง Framework Preset เป็น `Other`
3. เว้น Build Command และ Output Directory ว่างไว้
4. Deploy ได้เลย

`vercel.json` และ path แบบ relative ถูกเตรียมไว้แล้วสำหรับ Vercel root domain และ custom domain
