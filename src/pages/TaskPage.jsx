import { Calendar, ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Tittle";

function TaskPage() {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const title = searchParams.get("title") || "Título não disponível";
    const description = searchParams.get("description") || "Descrição não disponível";
    const date = searchParams.get("date") || "Data não disponível";

    function formatDate(dateString) {
        // Divide a string no formato YYYY-MM-DD
        const [year, month, day] = dateString.split("-");
        // Retorna no formato DD/MM/YYYY
        return `${day}/${month}/${year}`;
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative mb-6">

                    <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
                        <ChevronLeftIcon />
                    </button>

                    <Title>Detalhes da tarefa</Title>
                </div>

                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                    <p className="text-slate-600 mb-2">{description}</p>
                    <div className="flex flex-col">
                        <p className="text-slate-600 inline-flex items-center"><Calendar className="mr-2 mb-2" />{formatDate(date)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskPage;