# Description

Website created for prainduksi PPTI10 2022

# Configuration file

All configuration option must be present in file called `config.json` placed at root of the project

```
{
    "PORT": <application port>,
    "SECRET": <secret>,
    "SESSION_SECRET": <random string>,
    "LINE_MESSAGING_API": {
        "CHANNEL_ACCESS_TOKEN": <random string>,
        "CHANNEL_SECRET": <random string>
    }
}
```
