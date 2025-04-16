import {prisma} from "@/lib/prisma";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";


export default async function Page(props:{
    params:Promise<{
        citationId:string;
    }>;
    searchParams: Promise<Record<string, string | string[]>>
}) {
    const params = await props.params;
    const citationId = params.citationId;
    const citation = await prisma.citation.findFirst({
        where: {
            id: Number(params.citationId)
        }
    })

    if (!citation) {
        return <Card>
            <CardHeader></CardHeader>
            <CardTitle>The citation {citationId} not exist</CardTitle>
        </Card>
    }
return (
    <div className="min-h-full flex items-center justify-center">
        <Card className="p-4 max-w-sm m-auto flex items-start gap-4" key={citation.id}>
            <div className="flex flex-col gap-2 flex-1">
                <p>{citation.text}</p>
                <p>-- {citation.author}</p>
            </div>
        </Card>
    </div>
)
}