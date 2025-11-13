import { isNotEmpty } from './type-validators';

export interface IPersonName {
  firstName: string;
  lastName: string;
  middleName?: string | null;
}

const defaultFullNameOrder: Array<keyof IPersonName> = ['firstName', 'middleName', 'lastName'];

export const resolveFullName = (
  input: IPersonName,
  order: Array<keyof IPersonName> = defaultFullNameOrder,
): string => {
  return order
    .map((key) => {
      if (key === 'middleName' && !input.middleName) {
        // Skip middleName if null or undefined
        return null;
      }

      return input[key];
    })
    .filter(isNotEmpty) // Remove null/undefined values
    .join(' ');
};

export const resolveFullNameByLastFirstMiddle = (input: IPersonName): string =>
  resolveFullName(input, ['lastName', 'firstName', 'middleName']);

export const resolveLastNameWithInitials = ({
  firstName,
  lastName,
  middleName,
}: IPersonName): string => {
  const firstNameInitial = firstName.at(0);
  const middleNameInitial = middleName?.at(0);

  const initials = [firstNameInitial, middleNameInitial].filter(isNotEmpty).join('.');

  return initials ? `${lastName} ${initials}.` : lastName;
};
