import Button from "@/app/components/Button";

interface TodoButtonProps {
  onEdit: () => void;
  handleDeleteTodos: () => void;
  isChanged: boolean;
}

export default function TodoButton({
  onEdit,
  isChanged,
  handleDeleteTodos,
}: TodoButtonProps) {
  return (
    <>
      <div className="flex mt-6 justify-center gap-1.75 md:gap-4 lg:justify-end lg:max-w-249 mx-auto">
        <Button type="edit" onEdit={onEdit} isActive={isChanged} />
        <Button type="delete" onDelete={handleDeleteTodos} />
      </div>
    </>
  );
}
