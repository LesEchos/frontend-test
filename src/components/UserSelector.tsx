import { UserType } from '@/types';

type UserSelectorProps = {
  selectedUser: UserType;
  onUserChange: (userType: UserType) => void;
};

export default function UserSelector({ selectedUser, onUserChange }: UserSelectorProps) {
  const userOptions = [
    { value: 'none' as UserType, label: 'Utilisateur sans abonnement' },
    { value: 'single' as UserType, label: 'Utilisateur avec un abonnement' },
    { value: 'multiple' as UserType, label: 'Utilisateur avec plusieurs abonnements' }
  ];

  return (
    <select
      value={selectedUser}
      onChange={(e) => onUserChange(e.target.value as UserType)}
      style={{ marginTop: '20px' }}
    >
      {userOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}