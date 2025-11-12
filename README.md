# @ngdem/ngdem-backend-core

NestJS services package for ngdem organization.

## Installation

To install this package in your NestJS application:

```bash
yarn add @ngdem/ngdem-backend-core
```

**Note:** Make sure you have configured your `.npmrc` file to authenticate with GitHub Packages:

```
@ngdem:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## Usage

### Import the Module

In your NestJS application's `app.module.ts`:

```typescript
import { Module } from "@nestjs/common";
import { CoreModule } from "@ngdem/ngdem-backend-core";

@Module({
  imports: [CoreModule],
  // ... other modules
})
export class AppModule {}
```

### Use the Services

You can inject the services in your controllers or other services:

```typescript
import { Controller, Get } from "@nestjs/common";
import { ExampleService } from "@ngdem/ngdem-backend-core";

@Controller("api")
export class ApiController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get("hello")
  getHello() {
    return this.exampleService.getHello();
  }
}
```

## Development

### Build

```bash
yarn build
```

### Publish

```bash
yarn publish
```

Make sure you have:

1. Set the `GITHUB_TOKEN` environment variable with a GitHub Personal Access Token that has `write:packages` permission
2. Built the package (`yarn build`)
3. Updated the version in `package.json` if needed

## License

ISC
