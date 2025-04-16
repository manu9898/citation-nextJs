import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {prisma} from "@/lib/prisma";
import {DeleteCitationButton} from "@/app/admin/delete-citation-button";


export default async function page() {

const citations = await prisma.citation.findMany({
    orderBy:{
        createAt: "desc"
    }
})
return (
    <Card>
        <CardHeader>
            <CardTitle>Url: /admin</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
            {citations.map(citation => (
                <Card className="p-4 flex flex-row items-start gap-4" key={citation.id}>
                    <div className="flex flex-col gap-2 flex-1">
                        <p>{citation.text}</p>
                        <p>-- {citation.author}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <DeleteCitationButton id={citation.id}/>
                        <Link className={buttonVariants({size: "sm", variant: "outline"})} href={`/admin/citations/${citation.id}`}>✏️ </Link>
                        <Link className={buttonVariants({size: "sm", variant: "outline"})} href={`/citations/${citation.id}`}>🔗 </Link>
                    </div>
                </Card>
            ))}
            <Link className={buttonVariants({size: "lg", variant: "outline"})} href="/admin/citations/new">Create citation</Link>
        </CardContent>
    </Card>
)
}