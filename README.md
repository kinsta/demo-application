# TODO Checklist Application

Dead simple TODO application.

## To Run It in Production

The application expects a PostgreSQL database connection. Make sure you have the `DB_CONNECTION_URL` environment variable set correctly.

## To Run It Locally

1) Install dependencies:

```bash
yarn
```

2) Run the development server:

```bash
yarn dev
```

3) Make sure the correct environment variables are set:

```bash
cp .env.example .env
```

You should populate the `DB_CONNECTION_URL`.

4) Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**NOTE**: The page auto-updates as you edit the file.
