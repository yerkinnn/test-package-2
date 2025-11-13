import { base, en, Faker, ru } from '@faker-js/faker';

export const faker = new Faker({
  locale: [ru, en, base],
});
