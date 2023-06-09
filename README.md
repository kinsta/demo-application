# TODO Checklist Application

Dead simple TODO application.

## To Run It in Production

The application expects a PostgreSQL database connection. Make sure you have the `DB_CONNECTION_URL` environment variable set correctly.

## To Run It Locally

1) Copy `.env.example` to `.env` to populate the `DB_CONNECTION_URL` environment variable.
```bash
cp .env.example .env
```

2) Install dependencies:

```bash
yarn
```

3.a) Fire up the database locally:
```bash
yarn db-up
```

> **Note**
> You'll need to have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running to complete this step.

3.b) If this is the first time you are running the application, you need to run the migrations:
```bash
yarn db-migrate
```

4) Run the development server:

```bash
yarn dev
```

You should populate the `DB_CONNECTION_URL`.

4) Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**NOTE**: The page auto-updates as you edit the file.
