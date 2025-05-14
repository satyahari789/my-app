import { promises } from "dns"

export default async function productDetails({
    params,
}:{
  params: Promise<{ productId: string }>;
}){

    const productId = (await params).productId;
    return(
        <h1>Details About product{productId}</h1>
    )
}