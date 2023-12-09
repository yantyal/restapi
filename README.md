# jsonデータを返却するテスト用API

docker compose up -d

mac
curl -X GET http://localhost:3000/items/data.json

PowerShell
Invoke-WebRequest -Uri http://localhost:3000/items/data.json -Method GET