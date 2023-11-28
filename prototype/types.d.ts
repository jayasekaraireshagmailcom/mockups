type Label = {
    sx:object,
    variant:string,
    text:string,
    style:object,
    prodCount:number,
}

type Space = {
    style:object,
}

type Pannel = {
    children: React.ReactNode,
    spacing:object,
    columns:object,
}

type Item = {
    children: React.ReactNode,
    xs:number,
    sm:number,
    md:number,
    key:number,
}

type Paper = {
    children: React.ReactNode,
    variant:string,
    elevation:number,
    sx:object,
}

type Cloth = {
    id:number,
    title:string,
    price:float,
    description:string,
    category:string,
    image:string,
    rating:object,
}

type Categories = {
    title:string,
    url:string,
}

type ProductCount = {
    params:{
        count:number
    },
    searchParams:{

    }
}

type Margin = {
    style:object,
    children:React.ReactNode
}

type Button = {
    fnc:function,
    variant:string,
    text:string,
    href:string
}