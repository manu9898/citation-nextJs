"use client";

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useFormStatus} from "react-dom";
import {CreateCitationAction , updateCitationAction} from "@/app/admin/citations/citations.action";
import {Citation} from "@prisma/client"


export function CitationForm(props: { citation ?:Citation }){

    const onSubmit = async (FormData: FormData)=>{

        let error : null | string = null;

        if (props.citation){
            const json = await updateCitationAction(props.citation.id,{
                author: String(FormData.get("author")),
                text: String(FormData.get(("text"))),

        });
            error =  json.error; }
        else
        {
            const json = await CreateCitationAction({
                author: String(FormData.get("author")),
                text: String(FormData.get(("text"))),
            })
            error =  json.error
        }


        if (error){
            alert(error)
        }
    }

    const SubmitButton = () => {
        const {pending} = useFormStatus();
        return (
            <Button disabled={pending} type="submit">{pending ? "Loading..." : "Submit" }</Button>
        )
    }

    return(
        <Card>
            <CardHeader>
                <CardTitle>{props.citation ? "Update " : "Create "} citation</CardTitle>
            </CardHeader>
            <CardContent>
                <form action={
                    async (formData)=>{
                        await  onSubmit(formData)
                    }
                }
                      className="flex flex-col gap-2"
                >
                    <Label>
                        Citation
                        <Input defaultValue={props.citation?.text} name="text" />
                    </Label>
                    <Label>
                        Author
                        <Input defaultValue={props.citation?.author} name="author" />
                    </Label>
                    <SubmitButton />
                </form>
            </CardContent>
        </Card>
    )


}