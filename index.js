import fetch from "node-fetch"


export function DogFact() {
    return fetch("https://some-random-api.ml/facts/dog").then(res => res.json()).then(json => json.fact)
}

export function CatFact() {
    return fetch("https://some-random-api.ml/facts/cat").then(res => res.json()).then(json => json.fact)
}

export function PandaFact() {
    return fetch("https://some-random-api.ml/facts/panda").then(res => res.json()).then(json => json.fact)
}

export function FoxFact() {
    return fetch("https://some-random-api.ml/facts/fox").then(res => res.json()).then(json => json.fact)
}

export function BirdFact() {
    return fetch("https://some-random-api.ml/facts/bird").then(res => res.json()).then(json => json.fact)
}

export function KoalaFact() {
    return fetch("https://some-random-api.ml/facts/koala").then(res => res.json()).then(json => json.fact)
}
