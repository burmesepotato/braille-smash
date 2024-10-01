import { AppButton } from "@/features/shared/ui";

interface AppNavbarProps {
  title?: string;
  onBack: () => void;
}

export const AppNavbar = (props: AppNavbarProps) => {
  const { title, onBack } = props;

  const onToggleSound = () => {
    console.log("TODO: Toggle sound");
  };

  return (
    <nav className="flex items-center justify-between">
      <AppButton label="Exit" onClick={onBack} />
      {title && (
        <div>
          <h1 className="text-3xl text-center font-bold">{title}</h1>
        </div>
      )}
      <AppButton label="Sound Button" onClick={onToggleSound} />
    </nav>
  );
};
