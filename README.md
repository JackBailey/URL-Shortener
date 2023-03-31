<p align="center">
<img alt="" src="frontend/public/logo.png" height="300px">
</p>
<p align="center">
<a href="https://hub.docker.com/r/jackbailey/lynx">
    <img alt="Image Size" src="https://img.shields.io/docker/image-size/jackbailey/lynx?label=docker%20image%20size">
</a>
<a href="https://hub.docker.com/r/jackbailey/lynx">
    <img alt="Docker Pulls" src="https://img.shields.io/docker/pulls/jackbailey/lynx?label=docker%20pulls">
</a>
<a href="https://github.com/JackBailey/Lynx">
    <img alt="Image Size" src="https://img.shields.io/github/license/jackbailey/lynx?label=license">
</a>
<a href="https://github.com/JackBailey/Lynx">
    <img alt="Lines of code" src="https://www.aschey.tech/tokei/github/JackBailey/Lynx?category=code">
</a>
</p>

# Lynx

![link list](https://cdn.jackbailey.dev/screenshots/lynx.png)

## About

A fullstack application using the MEVN stack to shorten your URLs.

I've tried a variety of URL shorteners but didn't find any with the functionality I wanted so I made my own.

My functionality I wanted:

-   Admin Interface
-   Option to redirect the root path
-   Simple UI

A mirror of this repository is available at [git.jackbailey.cloud](https://git.jackbailey.cloud/jackbailey/Lynx)

## Environment variables

Fill in all of these environment variables before running Lynx.

For the normal installation: Rename `.example.env` to `.env` and fill the variables

For the docker installation: Fill in the variables in `docker-compose.yml`

| Environment Variable | Description | Example |
| --- | --- | --- |
| DB_HOST | The address of your mongodb database. | 127.0.0.1 |
| DB_PORT | The port of your mongodb database. When using docker set this to `27017`. | 27017 |
| DB_USER | Your mongodb database user. | admin |
| DB_PASSWORD | Your mongodb password. Generate a secure one using a tool like[1password](https://1password.com/password-generator/). |  |
|  |  |  |
| JWT_KEY | The key used to verify and sign login-sessions. Use a site like[1password](https://1password.com/password-generator/) to generate a 32 character password. |  |
|  |  |  |
| URL_LENGTH | The length of your automatically generated slugs. | 8 |
| URL_SET | The type of characters your automatically generated slug will use. | standard |
| URL_ONLY_UNIQUE | Wether each new url has to be unique, e.g. if a link already redirects to `https://example.com` new links created cannot link to the same destination. | false |
|  |  |  |
| NODE_ENV | Wether Lynx is running in a `production` or `development` environment | production |
| FORCE_FRONTEND_REDIRECT | Use the frontend to redirect instead of express, useful for hiding embeds on discord for all your rickrolling needs | false |
| ENABLE_REGISTRATION | Whether or not to allow registration. If not accounts exist you will be allowed to register either way. This first account will also be an admin account. | false |
| DOMAIN | Your Lynx installation domain | http://example.com |
| DEMO | Whether or not to enable the demo mode. In this mode features will be limited and links will be deleted after 10 minutes. | false |
| USE_HTTPS | If your Lynx installation will be at https://mydomain.com - this does not provide an SSL certificate, it only changes how cookies are handled. | true |

## Installation

You need a MongoDB instance to use Lynx.

Installation guides:

-   [Ubuntu](https://www.cherryservers.com/blog/how-to-install-and-start-using-mongodb-on-ubuntu-20-04)
-   [Windows](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514)
-   For docker this is provided in [`docker-compose.yml`](/docker-compose.yml)

### Normal Installation

You need yarn (via npm), git and node installed for this guide. I recommend [pm2](https://www.npmjs.com/package/pm2) to run this project in the background.

1. Clone this repo

    ```console
    git clone https://github.com/JackBailey/Lynx
    ```

2. Build the frontend

    1. Navigate to the frontend directory

        ```console
        cd frontend
        ```

    2. Install the required files

        ```console
        yarn
        ```

    3. Build the frontend (it will build to `../dist`)

        ```console
        yarn build
        ```

3. Navigate back to the server's directory

    ```console
    cd ..
    ```

4. Install the server's required files

    ```console
    yarn
    ```

5. Start the server

    ```console
    node .
    ```

### Docker Installation

1. Copy the default [docker-compose.yml](./docker-compose.yml).

2. Set the environment variables above to your choosing. Follow the guide [here](#environment-variables)
3. Start the container

    ```console
    docker compose up -d
    ```

Lynx should now be accessible at [localhost:3000](http://localhost:3000)

## Post Installation

You should now be able to register at `/dash`

The first account registration will always be allowed, further registrations depend on your `ENABLE_REGISTRATION` setting

## Development/Contribution

I'm actively using and trying to add features/fix bugs with Lynx, I'm just busy.

The TODO section below and my issues I've created _will_ get resolved/completed but may just take a while to do so.

You're welcome to make a PR adding any features/fixing any issues and I'll merge them.

## TODO

Visit the TODO list [here](https://github.com/users/JackBailey/projects/5/views/1)

## Naming

Each item including a slug, destination and id is called a [`Link`](src/db/models/link.js), the plural being links.

Each link has a `slug`, this is the path in the source url. `example.com/2dch89772`'s slug would be `2dch89772`.

Each item including a username and password is called an [`Account`](src/db/models/account.js), the plural being accounts.
