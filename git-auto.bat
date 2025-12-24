@echo off
cd /d "%~dp0"

REM --- اسحب آخر نسخة من الريبو ---
git pull origin main

REM --- أضف كل الملفات المعدلة ---
git add .

REM --- خذ رسالة الكوميت من المستخدم ---
set /p msg=اكتب رسالة الكوميت: 

REM --- اعمل commit ---
git commit -m "%msg%"

REM --- اعمل push للتعديلات ---
git push origin main

pause
