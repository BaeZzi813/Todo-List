"use client";

import {
  deleteTodos,
  getDetailTodos,
  patchTodos,
} from "@/services/todoService";
import { TodoDetail as TodoDetailType } from "@/types/todo";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TodoButton from "./_todo-button";
import TodoImage from "./_todo-image";
import TodoMemo from "./_todo-memo";
import TodoName from "./_todo-name";

type TodoFormData = Omit<TodoDetailType, "id">;

export default function TodoDetail() {
  const { itemId } = useParams<{ itemId: string }>();
  const [originalData, setOriginalData] = useState<TodoFormData | null>(null);
  const [editedData, setEditedData] = useState({
    name: "",
    isCompleted: false,
    memo: "",
    imageUrl: "",
  });
  const router = useRouter();

  useEffect(() => {
    const fetchTodoDetail = async () => {
      try {
        const data = await getDetailTodos(Number(itemId));
        const initialForm = {
          name: data.name,
          isCompleted: data.isCompleted,
          memo: data.memo || "",
          imageUrl: data.imageUrl || "",
        };
        setEditedData(initialForm);
        setOriginalData(initialForm);
      } catch (error) {
        console.error("할 일 상세 불러오기 실패", error);
      }
    };
    if (itemId) {
      fetchTodoDetail();
    }
  }, [itemId]);

  const handleToggleComplete = () => {
    setEditedData((prev) => ({ ...prev, isCompleted: !prev.isCompleted }));
  };

  const handleNameChange = (newName: string) => {
    setEditedData((prev) => ({ ...prev, name: newName }));
  };

  const handleMemoChange = (newMemo: string) => {
    setEditedData((prev) => ({ ...prev, memo: newMemo }));
  };

  const handleImageChange = (newImageUrl: string) => {
    setEditedData((prev) => ({ ...prev, imageUrl: newImageUrl }));
  };

  const handlePatchTodos = async () => {
    console.log("PATCH 전송 직전 데이터:", editedData);
    try {
      await patchTodos(Number(itemId), editedData);
      router.push("/");
    } catch (error) {
      console.error("할 일 수정 실패", error);
    }
  };

  const handleDeleteTodos = async () => {
    try {
      await deleteTodos(Number(itemId));
      router.push("/");
    } catch (error) {
      console.error("할 일 삭제 실패", error);
    }
  };

  const isChanged = JSON.stringify(originalData) !== JSON.stringify(editedData);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="px-4 pt-4 md:pt-6 mx-auto md:px-0 md:max-w-255.75 min-h-screen lg:max-w-300 bg-white">
          <TodoName
            name={editedData.name}
            isCompleted={editedData.isCompleted}
            handleToggleComplete={handleToggleComplete}
            handleNameChange={handleNameChange}
          />
          <div className="lg:flex lg:justify-between lg:max-w-249 lg:mx-auto">
            <TodoImage
              imageUrl={editedData.imageUrl}
              handleImageChange={handleImageChange}
            />
            <TodoMemo
              memo={editedData.memo}
              handleMemoChange={handleMemoChange}
            />
          </div>
          <TodoButton
            onEdit={handlePatchTodos}
            isChanged={isChanged}
            handleDeleteTodos={handleDeleteTodos}
          />
        </div>
      </div>
    </>
  );
}
