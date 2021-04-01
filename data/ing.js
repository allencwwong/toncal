import React from "react"
import Wrapper from "./../src/components/Wrapper"
import Mushroom from "./../src/components/Mushroom"
import Woodear from "./../src/components/Woodear"
import Shrimp from "./../src/components/Shrimp"
import Meat from "./../src/components/Meat"

export const baseTonIng = {
    "wrapper": 8,
    "mushroom": 1,
    "woodear": 1.5,
    "shrimp": 5,
    "shrimp-tail": 4, 
    "meat": 12.5
  }

export const tonIngInfo = {
    "wrapper": {
        name: '雲吞皮',
        img: <Wrapper/>,
    },
    "mushroom": {
        name: '香菇',
        img: <Mushroom/>,
    },
    "woodear": {
        name: '木耳',
        img: <Woodear/>,
    },
    "shrimp": {
        name: '蝦',
        img: <Shrimp/>,
    },
    "shrimp-tail": {
        name: '蝦尾',
        img: <Shrimp/>,
    },
    "meat": {
        name: '豬肉',
        img: <Meat/>,
    }
}