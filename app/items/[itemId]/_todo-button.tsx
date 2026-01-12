import Button from "@/app/components/Button";

interface TodoButtonProps {
  onEdit: () => void;
}

export default function TodoButton({ onEdit }: TodoButtonProps) {
  return (
    <>
      <div className="flex mt-6 justify-center gap-1.75 md:gap-4 lg:justify-end lg:max-w-249 mx-auto">
        <Button type="edit" onEdit={onEdit} />
        <Button type="delete" />
      </div>
    </>
  );
}
