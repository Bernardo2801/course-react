import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input
                type="text"
                placeholder="Digite o título da tarefa"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <Input
                type="text"
                placeholder="Digite a descrição da tarefa"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <Input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
            />

            <button
                onClick={() => {
                    // Verificar se os campos estão preenchidos
                    if (!title.trim() || !description.trim() || !date) {
                        return alert(
                            "Preencha o título, descrição e data limite da tarefa."
                        );
                    }

                    // Passar os dados para o pai
                    onAddTaskSubmit(title, description, date);

                    // Limpar os campos após adicionar
                    setTitle("");
                    setDescription("");
                    setDate("");
                }}
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
            >
                Adicionar
            </button>
        </div>
    );
}

export default AddTask;
