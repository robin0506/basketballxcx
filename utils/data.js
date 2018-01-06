

// /**
//  * 选择器 数据
//  */ 
// function getPickerData(){
//     var arr =[
//         {
//             name:'张三',
//             phone:'13812314563',
//             province:'北京',
//             city:'北京',
//             addr:'朝阳区望京悠乐汇A座8011'
//         },
//         {
//             name:'李四',
//             phone:'13812314563',
//             province:'北京市',
//             city:'北京市',
//             addr:'朝阳区望京悠乐汇A座4020'
//         }
//     ]
//     return  arr
// }
/**
 * 查询 地址
 * */ 
var user_data = userData()
function searchAddrFromAddrs(addrid){
    var result
    for(let i=0;i<user_data.addrs.length;i++){
        var addr = user_data.addrs[i]
        console.log(addr)
        if(addr.addrid == addrid){
            result = addr
        }
    }
    return result || {}
}
/**
 * 用户数据
 * */ 
function userData(){
    var arr = {
                uid:'1',
                nickname:'山炮',
                name:'张三',
                phone:'13833337998',
                avatar:'../../images/avatar.png',
                addrs:[
                   {
                        addrid:'1',
                        name:'张三',
                        phone:'13812314563',
                        province:'北京',
                        city:'直辖市',
                        addr:'朝阳区望京悠乐汇A座8011'
                    },
                    {
                        addrid:'2',
                        name:'李四',
                        phone:'13812314563',
                        province:'北京',
                        city:'直辖市',
                        addr:'朝阳区望京悠乐汇A座4020'
                    } 
                ]
            }
    return arr
}

function getIndexNavSectionData() {
  var arr = [
    [
      {

        subject: "皇家马德里",
        coverpath: "../../images/recommend_img_01.png",
        price: '¥198',
        message: '我们追求的是没有最长只有更长！'
      },
      {

        subject: "曼联",
        coverpath: "../../images/recommend_img_02.png",
        price: '¥1888',
        message: '我们追求的是没有最长只有更长！'
      },
      {

        subject: "AC米兰",
        coverpath: "../../images/recommend_img_03.png",
        price: '¥1588',
        message: '我们追求的是没有最长只有更长！'
      },
      {

        subject: "阿森纳",
        coverpath: "../../images/recommend_img_04.png",
        price: '¥198',
        message: '伊本造型是由著名形象设计师杨进先生创办。'
      },
      {

        subject: "巴萨罗娜",
        coverpath: "../../images/recommend_img_05.png",
        price: '¥198',
        message: '伊本造型是由著名形象设计师杨进先生创办。'
      },
      {

        subject: " 多特蒙德",
        coverpath: "../../images/recommend_img_06.png",
        price: '¥198',
        message: '《微微一笑很倾城》的剧照简直美腻到不要不要的'
      }
    ],
    [
      {
        artype: 'nails',
        subject: "秋季自然特价美甲",
        coverpath: "../../images/recommend_img_01.png",
        price: '¥198',
        message: '我们追求的是没有最长只有更长！'
      }
    ],
    [
      {
        artype: 'beauty',
        subject: "爱丽克EircParisSalon",
        coverpath: "../../images/recommend_img_03.png",
        price: '¥1588',
        message: '我们追求的是没有最长只有更长！'
      },
      {
        artype: 'beauty',
        subject: " 画对了妆，微微一笑颜值倍儿高！",
        coverpath: "../../images/recommend_img_06.png",
        price: '¥198',
        message: '《微微一笑很倾城》的剧照简直美腻到不要不要的'
      }
    ],
    [

      {
        artype: 'hair',
        subject: "伊本造型",
        coverpath: "../../images/recommend_img_05.png",
        price: '¥1588',
        message: '伊本造型是由著名形象设计师杨进先生创办。'
      }
    ],
    [
      {
        artype: 'eyelash',
        subject: "睫毛稀疏 种睫毛来帮忙",
        coverpath: "../../images/recommend_img_02.png",
        price: '¥1888',
        message: '我们追求的是没有最长只有更长！'
      }
    ]
  ]
  return arr
}


/*
 * 对外暴露接口
 */ 
module.exports = {
  userData : userData,
  getIndexNavSectionData : getIndexNavSectionData
}