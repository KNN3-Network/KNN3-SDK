# KNN3-SDK

[中文](https://github.com/KNN3-Network/Graphx-SDK/blob/main/README.md) | [English](https://github.com/KNN3-Network/Graphx-SDK/blob/main/KNN3-SDK_EN.md)

KNN3-SDK是一个开发者可以与KNN3 GraphX API直接交互的JavaScript SDK，在这个SDK里可以获得一下用户身份、行为凭证和关系数据。

## 内容目录

[#安装](#安装)

[#申请密钥](#申请密钥)

[#数据](#address)
  - [Address](#address)
  - [Event](#event)
  - [Twitter](#twitter)
  - [Avatar](#avatar)
  - [NFT](#nft)
  - [Token](#token)
  - [Lens](#lens)
  - [bit](#bit)
  - [spaceId](#spaceid)
- [License](#license)

## 安装
```
npm i knn3-sdk
```

## 说明         
    1. 所有列表接口为了性能考虑，每次请求数据量最大为50(超过的也只返回50条数据)。       
    2. 如果还有下一页数据，会返回cursor,请求下一页数据时请带上cursor。             
    3. 所有的函数都添加了单元测试，具体使用方法可以参考单元测试写法   
    4. 可选参数如果当中的有空的，请填写undefined  
    5. 具体的参数结构和返回值model可参考ts的定义    
    6. sdk需要申请密钥并设置才能提高访问频率限制(默认为10次/每分钟)，设置密钥方法如下      

```js
import { setAuthKey } from 'knn3-sdk'
setAuthKey('your-api-key')
```

## 申请密钥
您可以选择以下任意一种方式申请密钥：
1. 联系我们：builder@knn3.xyz
2. 通过[Transformer](https://transformer.knn3.xyz/)平台申请(待正式发布)
   1. 连接钱包，并绑定邮箱
   2. 进入创建API Key界面创建，需要输入API Key用途
   3. 复制API Key，通过"setAuthKey"方法配置

## Address   
该类接口主要获取钱包地址及该地址的一些相关信息

1. 根据地址获取钱包信息   

```js
import { getAddr } from 'knn3-sdk';

const addr = await getAddr(address)
```     

2. 获取地址列表     
请求参数:       
    * addressIn : 需要查询的地址列表(可选)     
    * limit: 每次列表的条数，最大50(可选) 
    * cursor: 下个游标开始的地址(可选)        
```js
import { getAddrList } from 'knn3-sdk';

const result = await getAddrList()
```

3. 获取地址参加的poap
请求参数:       
    * address: 钱包地址(必选)     
    * eventName: poap名称(可选)     
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)  
```js
import { attendEvents } from 'knn3-sdk';

const result = await attendEvents(
      '0x535824c63d3421c703cb022aba55c321a6e30bf4',
      'eth',
      2,
      'ethberlinzwei'
    )
```    

4. 获取地址绑定的twitter
请求参数:       
    * address: 钱包地址(必选)     
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)  

```js
import { boundTwitter } from 'knn3-sdk';
const result = await boundTwitter('0x035d1fa6e5967624f0cd424892994717ea9fc2d8')
```

5. 获取地址绑定的avatar
请求参数:       
    * address: 钱包地址(必选)     
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)  

```js
import { boundAvatars } from 'knn3-sdk';
const result = await boundAvatars(
      '0x790116d0685eb197b886dacad9c247f785987a4a'
    )
```

6. 获取地址所持有的nft
请求参数:   
    * address: 钱包地址(必选)  
    * network: 'ethereum' 或者 'polygon'(必选)
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)  
```js
import { holdNfts } from 'knn3-sdk';
let result = await holdNfts(
      '0x88520C10ad3d35aD2D3220CdE446CcB33f09331B',
      'ethereum'
    )
```

7. 获取地址所持有的token
请求参数:   
    * address: 钱包地址(必选)  
    * network: 'ethereum' 或者 'polygon'(必选)
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)  
```js
import { holdTokens } from 'knn3-sdk';
let result = await holdTokens(
      '0x88520C10ad3d35aD2D3220CdE446CcB33f09331B',
      'ethereum'
    )
```

8. 获取地址绑定的.bit
请求参数:       
    * address: 钱包地址(必选)     
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)  

```js
import { boundBits } from 'knn3-sdk';
const result = await boundBits(
      '0x790116d0685eb197b886dacad9c247f785987a4a'
    )
```

9. 获取地址绑定的spaceId
请求参数:       
    * address: 钱包地址(必选)     
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)  

```js
import { boundSpaceIds } from 'knn3-sdk';
const result = await boundSpaceIds(
      '0x790116d0685eb197b886dacad9c247f785987a4a'
    )
```

10. 获取地址的投票数据(snapshot)
请求参数:       
    * address: 钱包地址(必选)     
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)
```js
import { votes } from 'knn3-sdk';
const vote = await votes('0x724f321c4efed5e3c7cca40168610c258c82d02f')
```


### Event       
该类接口主要是获取poap事件      

1. 根据id请求poap信息   

```js
import { getEvent } from 'knn3-sdk';

const event = await getEvent('1')
```     

2. 获取poap事件列表     

请求参数:    
    * name: poap的name(模糊匹配，可选)
    * nameIn : 需要查询的poap列表(数组精确匹配,可选)      
    * cursor: 下个游标开始的地址(可选)        
    * limit: 每次列表的条数，最大50(可选)
```js
import { getEventList } from 'knn3-sdk';

const result = await getEventList('eth')
```

3. 获取某个poap的参与地址

请求参数:    
    * id: poap的id(必填) 
    * address: 参与的地址(可选)
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)        
```js
const result = await getEventAddr('10203')
```


### Twitter
该类接口主要获取twitter相关绑定信息

1. 获取twitter列表信息
请求参数:    
    * name: twitter的name(模糊匹配，可选)    
    * cursor: 下个游标开始的地址(可选)        
    * limit: 每次列表的条数，最大50(可选)
```js
import { getTwitterList } from 'knn3-sdk';

const result = await getTwitterList('chen')
```

2. 根据twitter的Uid查看绑定的地址
请求参数:
    * uid: twitter的uid(必填) 
    * address: 参与的地址(可选)
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)  
```js
import { getTwitterIncludeAddr } from 'knn3-sdk';

const result = await  getTwitterIncludeAddr('988064388702650370')
```

### Avatar
该类接口主要获取avatar相关绑定信息      

1. 获取avatar的列表
请求参数:    
    * avatar: avatar(精确匹配，可选)    
    * cursor: 下个游标开始的地址(可选)        
    * limit: 每次列表的条数，最大50(可选)

```js
import { getAvatarList } from 'knn3-sdk';
await getAvatarList(
      undefined,
      3,
      '0x0200c6fed045084ae0185b6cf290b60f42fd5769aa94b3c2e67a68cf2cf2847bde'
    )
```

2. 获取与avatar绑定的address
请求参数:       
    * avatar: avatar(必填) 
    * address: 参与的地址(可选)
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)  
```js
import { getAvatarBindAddr } from 'knn3-sdk';
const result = await getAvatarBindAddr(
      '0x036fd654a9601ad7db0ae5cd811bf535019e5fdf441591afc676943c73750572e6'
    )
```

3. 获取与avatar绑定的twitter
请求参数:       
    * avatar: avatar(必填) 
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选) 
```js
import { getAvatarBindTwitter } from 'knn3-sdk';
 const result = await getAvatarBindTwitter(
      '0x036bb12a884a8ad71b35d2f6be0f6f2b97000921b0cae82a606fc56ffe685a47a5'
    )
```

### NFT
该类接口主要获取nft相关的信息(暂时支持eth和polygon)     

1. 获取nft列表      
    * contract: 合约地址(可选) 
    * network: 'ethereum' 或者 'polygon'(可选) 
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)             

```js  
import { getNftList } from 'knn3-sdk';    
const result = await getNftList(
      undefined,
      undefined,
      5,
      '0x000000777697bdb425a417495743088dc664b10b'
    ) 
```     

2. 获取持有某类nft的地址
    * contract: 合约地址(必填) 
    * network: 'ethereum' 或者 'polygon'(必填) 
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)      

```js
import { getAddrByNft } from 'knn3-sdk';   
const result = await getAddrByNft(
      '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
      'ethereum',
      3,
      '0x00000000000c480032486921e7ced20e4727f00e'
    )
```        

### Token
该类接口主要获取token相关的信息(暂时支持eth和polygon)     

1. 获取token列表      
    * contract: 合约地址(可选) 
    * network: 'ethereum' 或者 'polygon'(可选) 
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)             

```js  
import { getTokenList } from 'knn3-sdk';    
const result = await getTokenList(
      undefined,
      undefined,
      5,
      '0x000000777697bdb425a417495743088dc664b10b'
    ) 
```     

2. 获取持有某类Token的地址
    * contract: 合约地址(必填) 
    * network: 'ethereum' 或者 'polygon'(必填) 
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)      

```js
import { getAddrByToken } from 'knn3-sdk';   
const result = await getAddrByToken(
      '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
      'ethereum',
      3,
      '0x00000000000c480032486921e7ced20e4727f00e'
    )
``` 

### Lens
该类接口主要获取Lens相关的信息
1. 获取lens profile列表     
    * handle: lens的handle(可选) 
    * profileId: lens的profileId(可选) 
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)  

```js
import { getLensList } from 'knn3-sdk'; 
const result = await getLensList('shadow88sky.lens')
```    

2. 获取lens的follower地址列表
    * profileId: lens的profileId(可选) 
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)  

```js
import { getLensFollowers } from 'knn3-sdk'; 
const result = await getLensFollowers(104724)
```     

3. 获取publications
    * profileId: lens的profileId(可选) 
    * pubId: lens的pubId(可选) 
    * type: 'Comment' | 'Post' | 'Mirror'(可选) 
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)  
```js
import { getLensPublications } from 'knn3-sdk'; 
result = await getLensPublications(104724, undefined, 'Mirror', 1, 1161695)
```

4. 获取lens的评级分数
    * profileId: lens的profileId(必选) 
```js
import { getLensRate } from 'knn3-sdk'; 
result = await getLensRate(5)
```

### bit 
该类接口主要获取.bit相关的信息
1. 获取.bit的列表
    * account: bit的账户(可选) 
    * addr: 地址(可选)
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)      

```js
import { getBitList } from 'knn3-sdk'; 
const result = await getBitList(
      undefined,
      '0xeab07120cdecc4a4ffaeddccd8cc508cd42702a1'
    )
```

### spaceId 
该类接口主要获取spaceId相关的信息
1. 获取spaceId的列表
    * spaceId: spaceId域名(可选) 
    * addr: 地址(可选)
    * limit: 每次列表的条数，最大50(可选)
    * cursor: 下个游标开始的地址(可选)      

```js
import { getSpaceIdList } from 'knn3-sdk'; 
const result = await getSpaceIdList(undefined, undefined, 10, '¥1000.bnb')
```
