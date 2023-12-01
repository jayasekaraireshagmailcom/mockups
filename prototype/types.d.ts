type Label = {
    sx:object,
    variant:string,
    text:string,
    style:object,
    prodCount:number,
    align:string
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
    params:string
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
    fnc?:function,
    variant:string,
    text:string,
    href?:string,
    type:string,
    disabled:boolean
}

type Input = {
    id:string,
    label:string,
    variant:string,
    name:string,
    type:string,
    onChange?:function
}

type Alert = {
    severity:string,
    children:React.ReactNode,
}