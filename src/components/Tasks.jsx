import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate()

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title || "");
        query.set("description", task.description || "");
        query.set("date", task.date || "");
        navigate(`/task?${query.toString()}`);
    }

    function formatDate(dateString) {
        // Divide a string no formato YYYY-MM-DD
        const [year, month, day] = dateString.split("-");
        // Retorna no formato DD/MM/YYYY
        return `${day}/${month}/${year}`;
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={() => onTaskClick(task.id)}
                        className={`bg-slate-400 w-full text-left text-white p-2 rounded-md flex justify-between items-center gap-2 ${task.isCompleted && "line-through"}`}
                    >
                        <div className="flex items-center gap-2"> {/* Contém o título e o ícone */}
                            {task.isCompleted && <CheckIcon />}
                            <span>{task.title}</span> {/* Usar um span para o título */}
                        </div>
                        <p className="text-sm text-gray-700">{formatDate(task.date)}</p> {/* Formatação da data */}
                    </button>
                    <Button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 text-white p-2 rounded-md">
                        <ChevronRightIcon />
                    </Button>
                    <Button onClick={() => onDeleteTaskClick(task.id)}
                        className="bg-slate-400 text-white p-2 rounded-md">
                        <TrashIcon />
                    </Button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;