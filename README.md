# Description

Website created for prainduksi PPTI10 2022

# Configuration file

All configuration option must be present in file called `config.json` placed at root of the project
This project use json file as a database (`db.example.json`)

```
{
    "PORT": <application port>,
    "SECRET": <secret>,
    "ADMIN_SECRET": <admin secret>,
    "SESSION_SECRET": <random string>,
    "LINE_MESSAGING_API": {
        "CHANNEL_ACCESS_TOKEN": <channel access token>,
        "CHANNEL_SECRET": <channel secret>
    },
    "GROUP_ID": <line group id>
}
```
