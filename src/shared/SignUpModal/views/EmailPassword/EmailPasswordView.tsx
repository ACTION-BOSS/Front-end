import { ChangeEvent, FC } from 'react';
type EmailPasswordViewProps = {
  emailValue: string;
  onChangeEmail: (...event: any[]) => void;
};

export const EmailPasswordView: FC<EmailPasswordViewProps> = ({
  emailValue,
  onChangeEmail,
}) => {
  return (
    <div>
      <input
        value={emailValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeEmail(event.target.value);
        }}
      />
    </div>
  );
};
