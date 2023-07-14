# KNN3-SDK

[English](https://github.com/KNN3-Network/Graphx-SDK/blob/main/KNN3-SDK_EN.md) | [中文](https://github.com/KNN3-Network/Graphx-SDK/blob/main/README.md)

KNN3-SDK is a JavaScript SDK with which developers can directly interact with KNN3 GraphX API. In this SDK, user identity, behavior credentials and relationship data can be obtained.

## Content

[#Install](#Install)

[#Apply for API Key](#apply-for-api-key)

[#Data](#address)
  - [Address](#address)
  - [Event](#event)
  - [Twitter](#twitter)
  - [Avatar](#avatar)
  - [NFT](#nft)
  - [Token](#token)
  - [Lens](#lens)
  - [bit](#bit)
  - [spaceId](#spaceid)
  - [Proposal](#proposal)
  - [Hashkey](#hashkey)
- [License](#license)

## Install

```js
npm i knn3-sdk
```

## Description

1. For performance reasons, all list interfaces have a maximum data limit of 50 per request (if the limit is exceeded, only 50 data entries will be returned).
2. If there is more data on the next page, a cursor will be returned. Please include the cursor when requesting the next page of data.
3. All functions have been added with unit tests. For specific usage, please refer to the unit test implementation.
4. For optional parameters, if there are any empty fields, please fill in with 'undefined'.
5. Refer to the TypeScript definitions for specific parameter structures and return value models.
6. To increase the access frequency limit (default is 10 times per minute), the SDK needs to apply for and set a key. The method for setting a key is as follows:

```js
// set apikey
import { setAuthKey } from 'knn3-sdk'
setAuthKey('your-api-key')
```

## Apply for API Key
You can choose any of the following methods to apply for an API key：   
1. Contact us：builder@knn3.xyz
2. Apply from [K.Transformer](https://transformer.knn3.xyz/) platform    
    i Connect wallet or other authorization method, bind email  
    ii Go to Account - Service Control- API Data Service to create API Key, enter API Key purpose, select service Real-time Data Service - KNN3 API  
    iii Copy API Key, configure through "setAuthKey" method
 
   
## Address

This category of interfaces mainly retrieves wallet addresses and some related information.

1. Get wallet information by address

```js
// request
import { getAddr } from 'knn3-sdk';
const addr = await getAddr(address)
``` 

```js
// response
console.log(addr);
{
  addr: '0x88520c10ad3d35ad2d3220cde446ccb33f09331b',
  ens: [ 'shadow88sky.eth' ],
  name: 'shadow88sky',
  github: 'shadow88sky',
  email: '119136016@qq.com'
}
```

2. Get address list 

   Request parameters:

   - addressIn: List of addresses to query (optional)

   - limit: Number of items per list, up to 50 (optional)

   - cursor: The starting address of the next cursor (optional)

```js
// request
import { getAddrList } from 'knn3-sdk';
const result = await getAddrList()
``` 

```js
// response
;
{
  list: [
    {
      addr: '0x0000000000000000000000000000000000000000',
      ens: [Array],
      name: null,
      github: null,
      email: null
    },
    {
      addr: '0x0000000000000000000000000000000000000001',
      ens: [Array],
      name: null,
      github: null,
      email: null
    },
    {
      addr: '0x0000000000000000000000000000000000000002',
      ens: [],
      name: null,
      github: null,
      email: null
    }
  ],
  cursor: '0x0000000000000000000000000000000000000003'
}
```

3. Get POAPs attended by the address 

   Request parameters:

   - address: Wallet address (required)

   - eventName: POAP name (optional)

   - limit: Number of items per list, up to 50 (optional)

   - cursor: The starting address of the next cursor (optional)

```js
// request
import { attendEvents } from 'knn3-sdk';
const result = await attendEvents(
      '0x535824c63d3421c703cb022aba55c321a6e30bf4',
      'eth',
      2,
      'ethberlinzwei'
)
``` 

```js
// response
;
{
  list: [
    {
      addr: '0x535824c63d3421c703cb022aba55c321a6e30bf4',
      id: '48282',
      name: 'banklessdao @ ethprague 2022',
      imageUrl: 'https://s3.us-west-1.amazonaws.com/knn3-static-logo/48282.png'
    },
    {
      addr: '0x535824c63d3421c703cb022aba55c321a6e30bf4',
      id: '43',
      name: 'dappcon 2019',
      imageUrl: 'https://s3.us-west-1.amazonaws.com/knn3-static-logo/43.png'
    },
    {
      addr: '0x535824c63d3421c703cb022aba55c321a6e30bf4',
      id: '65440',
      name: 'ethberlin³',
      imageUrl: 'https://s3.us-west-1.amazonaws.com/knn3-static-logo/65440.png'
    }
  ],
  cursor: 'ethberlinzwei'
}
```

4. Get Twitter accounts bound to the address 

   Request parameters:

   - address: Wallet address (required)

   - limit: Number of items per list, up to 50 (optional)

   - cursor: The starting address of the next cursor (optional)

```js
// request
import { boundTwitter } from 'knn3-sdk';
const result = await boundTwitter('0x035d1fa6e5967624f0cd424892994717ea9fc2d8')
``` 

```js
// response
;
{
  list: [
    {
      uid: '988064388702650370',
      handle: 'Downpink1',
      name: 'dowpink.eth'
    }
  ],
  cursor: null
}
```

5. Get avatars bound to the address 

   Request parameters:

   - address: Wallet address (required)

   - limit: Number of items per list, up to 50 (optional)

   - cursor: The starting address of the next cursor (optional)

```js
// request
import { boundAvatars } from 'knn3-sdk';
const result = await boundAvatars(
      '0x790116d0685eb197b886dacad9c247f785987a4a'
)
``` 

```js
// response
;
{
  list: [
    {
      id: 15702,
      avatar: '0x02054a2cf487cb3687e12b3ec3d6e7f76bd5425f0b0ad6f32680aa615dba583397',
      platform: 'ethereum',
      identity: '0x790116d0685eb197b886dacad9c247f785987a4a',
      created_at: '2022-12-16T10:23:47.466Z',
      updated_at: '2022-12-16T10:23:47.466Z'
    },
    {
      id: 16411,
      avatar: '0x020b270392f312de39155b2f7a59f89c8ccf9ab27917a7e253faff646a52778462',
      platform: 'ethereum',
      identity: '0x790116d0685eb197b886dacad9c247f785987a4a',
      created_at: '2023-01-10T07:06:42.921Z',
      updated_at: '2023-01-10T07:06:42.921Z'
    },
    {
      id: 8332,
      avatar: '0x020ca0242ff7c3aac99ac9ed263c196850fc14eee094302f72679231afe5435cf4',
      platform: 'ethereum',
      identity: '0x790116d0685eb197b886dacad9c247f785987a4a',
      created_at: '2022-11-15T19:36:37.276Z',
      updated_at: '2022-11-15T19:36:37.276Z'
    }
    ...
  ]
}
```

6. Get NFTs held by the address 

   Request parameters:

   - address: Wallet address (required)

   - network: 'ethereum' or 'polygon' (required)
   - limit: Number of items per list, up to 50 (optional)

   - cursor: The starting address of the next cursor (optional)

```js
// request
import { holdNfts } from 'knn3-sdk';
let result = await holdNfts(
      '0x88520C10ad3d35aD2D3220CdE446CcB33f09331B',
      'ethereum'
)
``` 

```js
// response
;
 {
      list: [
        {
          contract: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
          description: 'Ethereum Name Service (ENS) domains are secure domain names for the decentralized world. ENS domains provide a way for users to map human readable names to blockchain and non-blockchain resources, like Ethereum addresses,IPFS hashes, or website URLs. ENS domains can be bought and sold on secondary markets.',
          externalurl: 'https://ens.domains',
          imageurl: 'https://i.seadn.io/gae/0cOqWoYA7xL9CkUjGlxsjreSYBdrUBE0c6EO1COG4XE8UeP-Z30ckqUNiL872zHQHQU5MUNMNhfDpyXIP17hRSC5HQ?w=500&auto=format',
          name: '',
          network: 'ethereum',
          primaryInterface: 'erc_721',
          symbol: '',
          createat: '2023-01-11T09:48:51.662Z',
          updateat: '2023-01-16T10:52:03.000Z',
          count: '1'
        }
      ],
      cursor: null
    }
```

7. Get tokens held by an address 

   Request parameters:

   - address: Wallet address (required)

   - network: 'ethereum' or 'polygon' (required)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

```js
// request
import { holdTokens } from 'knn3-sdk';
let result = await holdTokens(
      '0x88520C10ad3d35aD2D3220CdE446CcB33f09331B',
      'ethereum'
)
``` 

```js
// response
;
{
      list: [
        {
          contract: '0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198',
          name: 'Bankless Token',
          symbol: 'BANK',
          decimal: '18',
          network: 'ethereum',
          count: '1.3227938609411654162376e+22'
        },
        {
          contract: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
          name: 'Aave Token',
          symbol: 'AAVE',
          decimal: '18',
          network: 'ethereum',
          count: '36471439786989313862'
        },
        {
          contract: '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72',
          name: 'Ethereum Name Service',
          symbol: 'ENS',
          decimal: '18',
          network: 'ethereum',
          count: '174756310000000000000'
        }
        ...
      ],
      cursor: null
}
```

8. Get address-bound .bit 

   Request parameters:

   - address: Wallet address (required)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

```js
// request
import { boundBits } from 'knn3-sdk';
const result = await boundBits(
      '0x790116d0685eb197b886dacad9c247f785987a4a'
)
``` 

```js
// response
;
{
      list: [
        {
          addr: '0x99c082443a66701a3a66d8dedc507505ae4e13a2',
          account: 'cryptocaptain.bit',
          algorithmId: 5,
          chain: 'EVM',
          outpoint: '0x7b3e759a0971b7a7961becc9bf487ad02038bdcc44356558d436b19f2c79456c-0'
        }
      ],
      cursor: null
}
```

9. Get address-bound spaceId 

   Request parameters:

   - address: Wallet address (required)

   - limit: Number of items per list, maximum 50 (optional)
   - cursor: Address where the next cursor starts (optional)

```js
// request
import { boundSpaceIds } from 'knn3-sdk';
const result = await boundSpaceIds(
      '0x790116d0685eb197b886dacad9c247f785987a4a'
)
``` 

```js
// response  
;
{
      list: [
        {
          name: 'shadow88sky.bnb',
          address: '0x88520c10ad3d35ad2d3220cde446ccb33f09331b'
        }
      ],
      cursor: null
}
```

10. Get address votes(snapshot)

    Request parameters:

    - address: Wallet address (required)
   
    - limit: Number of items per list, maximum 50 (optional)
    - cursor: Address where the next cursor starts (optional)
```js
// request
import { votes } from 'knn3-sdk';
const vote = await votes('0x724f321c4efed5e3c7cca40168610c258c82d02f')
``` 

```js
// response
console.log(vote);
{
      list: [
        {
          address: '0x724f321c4efed5e3c7cca40168610c258c82d02f',
          spaceId: 'balancer.eth',
          count: 3
        },
        {
          address: '0x724f321c4efed5e3c7cca40168610c258c82d02f',
          spaceId: 'daocity.eth',
          count: 3
        },
        {
          address: '0x724f321c4efed5e3c7cca40168610c258c82d02f',
          spaceId: 'ens.eth',
          count: 1
        },
       ...
      ],
      cursor: null
}
```

11. Check if the address has voted for a specific proposalId
   Request parameters:
    - address: Wallet address (required)
    - proposalId: proposal id (required)
```js
// request
import { isVote } from 'knn3-sdk';
const result = await isVote(
      "0xd0b42b312684136b1323df6df8435bfd20e1c59c",
      "0xb2195cf08464739fc51ded07d7aa5b3d290e0f6b67d8b9433a2f420119abc257"
);

// response
 => true
```

12. Get address-bound hashkey

   Request parameters:

   - address: Wallet address (required)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)    

```js
// request
import { boundHashkeys } from 'knn3-sdk';
const result = await boundHashkeys(
      '0x88520C10ad3d35aD2D3220CdE446CcB33f09331B'
)
```

```js
// response
{
      list: [
        {
          chain: '137',
          tx_hash: '0x0x39cf7e9f9e983e615c9df4d1cfad059528109e72fe7f526b122967ec66519560',
          log_index: '217',
          block_number: '41661746',
          tx_index: '56',
          owner: '0x88520C10ad3d35aD2D3220CdE446CcB33f09331B',
          contract: '0x7fDd3f96cBDE51737A9E24b461E7E92A057C3BBf',
          token_id: '43288774018209114666072661109206283848131676493678691273260165003966608687089',
          uri: 'https://api.hashkey.id/did/api/nft/metadata/43288774018209114666072661109206283848131676493678691273260165003966608687089',
          name: 'shadow88sky.key',
          did: 'shadow88sky',
          avatar: 'https://api.hashkey.id/did/api/file/avatar_8c767722-7d98-4c4c-b0c9-05dda43dda9e.png'
        }
      ],
      cursor: null
}
```

### Event

This category of interfaces is mainly for obtaining POAP events.

1. Request POAP information by id

```js
// request
import { getEvent } from 'knn3-sdk';
const event = await getEvent('1')
``` 

```js
// response
console.log(event);
{
      id: '1',
      imageUrl: 'https://s3.us-west-1.amazonaws.com/knn3-static-logo/1.png',
      name: 'dappcon'
}
```

2. Get POAP event list

   Request parameters:

   - name: POAP's name (fuzzy match, optional)

   - nameIn: List of POAPs to query (array exact match, optional)

   - cursor: Address where the next cursor starts (optional)

   - limit: Number of items per list, maximum 50 (optional)

```js
// request
import { getEventList } from 'knn3-sdk';
const result = await getEventList('eth')
``` 

```js
// response
;
{
     list: [
        {
          id: '10',
          imageUrl: 'https://s3.us-west-1.amazonaws.com/knn3-static-logo/10.png',
          name: 'ethbuenosaires'
        },
        {
          id: '1004',
          imageUrl: 'https://s3.us-west-1.amazonaws.com/knn3-static-logo/1004.png',
          name: 'eclectic method 19/02/21'
        },
        {
          id: '10052',
          imageUrl: 'https://s3.us-west-1.amazonaws.com/knn3-static-logo/10052.png',
          name: 'poap workshop oct 2021 - ethereal art collections'
        },
        ...
    ]
    cursor: '1122'
}
```

3. Get the participating addresses of a specific POAP

   Request parameters: 

   * id: POAP's id (required) 

   * address: Participating address (optional) 

   * limit: Number of items per list, maximum 50 (optional) 

   * cursor: Address where the next cursor starts (optional)

```js
// request
const result = await getEventAddr('10203')
``` 

```js
// response
;
{
     list: [
        {
          addr: '0x00009dc8aac69accf38e87ab42a82a28be68f2a0',
          name: null,
          ens: []
        },
        {
          addr: '0x0000baa55a9c2a06a3922c563d8d9fcb1a0dbf2f',
          name: null,
          ens: []
        },
        {
          addr: '0x000109758a583eff3c40cf845ee35a01582ba816',
          name: null,
          ens: []
        },
        ...
    ]
    cursor: '0x1286cbddc7b2cd1a2f32fe920a4fe775643642a8'
}
```

### Twitter

This category of interfaces is mainly for obtaining Twitter-related binding information.

1. Get Twitter list information 

   Request parameters:

   - name: Twitter's name (fuzzy match, optional)
   - cursor: Address where the next cursor starts (optional)
   - limit: Number of items per list, maximum 50 (optional)

```js
// request
import { getTwitterList } from 'knn3-sdk';
const result = await getTwitterList('chen')
``` 

```js
// response
;
{
     list: [
        {
          uid: '1305846248101105664',
          handle: 'AleksandrRedch1',
          name: 'Aleksandr Redchenko'
        },
        {
          uid: '1446008740776333312',
          handle: 'AlynnxChen',
          name: 'alex chen'
        },
        {
          uid: '1486523194836021248',
          handle: 'AndreyK45647872',
          name: 'Andrey Kravchenko'
        },
        ...
    ]
    cursor: 'louisechen'
}
```

2. View the bound address based on Twitter's Uid 

   Request parameters:

   - uid: Twitter's uid (required)

   - address: Participating address (optional)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

```js
// request
import { getTwitterIncludeAddr } from 'knn3-sdk';
const result = await  getTwitterIncludeAddr('988064388702650370')
``` 

```js
// response
;
{
      list: [
        {
          addr: '0x035d1fa6e5967624f0cd424892994717ea9fc2d8',
          name: 'PINK',
          ens: []
        }
      ],
      cursor: null
}
```

### Avatar

This category of interfaces is mainly for obtaining Avatar-related binding information.

1. Get the Avatar list 

   Request parameters:

   - avatar: Avatar (exact match, optional)
   - cursor: Address where the next cursor starts (optional)
   - limit: Number of items per list, maximum 50 (optional)

```js
// request
import { getAvatarList } from 'knn3-sdk';
await getAvatarList(
      undefined,
      3,
      '0x0200c6fed045084ae0185b6cf290b60f42fd5769aa94b3c2e67a68cf2cf2847bde'
)
``` 

```js
// response
;
{
      list: [
        {
          id: 1924,
          avatar: '0x0200c6fed045084ae0185b6cf290b60f42fd5769aa94b3c2e67a68cf2cf2847bde',
          platform: 'ethereum',
          identity: '0x82df8dfdacf48bb6cc6190e76cd51761820825f9',
          created_at: '2022-11-15T12:48:36.783Z',
          updated_at: '2022-11-15T12:48:36.783Z'
        },
        {
          id: 4536,
          avatar: '0x0200c6fed045084ae0185b6cf290b60f42fd5769aa94b3c2e67a68cf2cf2847bde',
          platform: 'twitter',
          identity: 'hannah_h2s',
          created_at: '2022-11-15T17:04:14.250Z',
          updated_at: '2022-11-15T17:04:14.250Z'
        },
        {
          id: 16307,
          avatar: '0x0200c77ded3883e00a29cf23cdcb8220e1dcd338b9df009236b88ab63f5678e2f4',
          platform: 'twitter',
          identity: 'yukinobtc',
          created_at: '2023-01-05T14:26:16.710Z',
          updated_at: '2023-01-05T14:26:16.710Z'
        }
      cursor: 0x0200c77ded3883e00a29cf23cdcb8220e1dcd338b9df009236b88ab63f5678e2f4
}
```

2. Get the address bound with the Avatar

   Request parameters:

   - avatar: Avatar (required)

   - address: Participating address (optional)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

```js
// request
import { getAvatarBindAddr } from 'knn3-sdk';
const result = await getAvatarBindAddr(
      '0x036fd654a9601ad7db0ae5cd811bf535019e5fdf441591afc676943c73750572e6'
)
 ``` 

```js
// response
;
{
      list: [
         {
          addr: '0x790116d0685eb197b886dacad9c247f785987a4a',
          name: 'wen6666',
          ens: []
        }
      ],
      cursor: null
}
```

3. Get the Twitter bound with the Avatar 

   Request parameters:

   - avatar: Avatar (required)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

```js
// request
import { getAvatarBindTwitter } from 'knn3-sdk';
const result = await getAvatarBindTwitter(
      '0x036bb12a884a8ad71b35d2f6be0f6f2b97000921b0cae82a606fc56ffe685a47a5'
)
 ``` 

```js
// response   
;
{
      list: [
         {
          uid: '1303510891141369856',
          handle: 'haus_front',
          name: 'Frontfront'
        }
      ],
      cursor: null
}
```

### NFT

This category of interfaces is mainly for obtaining NFT-related information (currently supports ETH and Polygon).

1. Get the NFT list
   - contract: Contract address (optional)
   - network: 'ethereum' or 'polygon' (optional)
   - limit: Number of items per list, maximum 50 (optional)
   - cursor: Address where the next cursor starts (optional)

```js
// request
import { getNftList } from 'knn3-sdk';
const result = await getNftList(
      undefined,
      undefined,
      5,
      '0x000000777697bdb425a417495743088dc664b10b'
)
``` 

```js
// response
;
{
      list: [
        {
          contract: '0x000000777697bdb425a417495743088dc664b10b',
          description: 'CryptoBlobs are an animated digital collectible created by SuperCollectiv that rewards collectors for deciding which ones are rare using a unique soul-transferring system called Sacrificing. Collect and harness souls to increase the rarity and value of your CryptoBlobs, which also increases the floor price. Win up to $50,000 in prizes when you purchase and sacrifice during the initial mint.',
          externalurl: 'http://cryptoblobs.com',
          imageurl: 'https://i.seadn.io/gcs/files/0c3b99df3f62cc91891711477c5c7ed9.png?w=500&auto=format',
          name: 'CryptoBlobs.com | SuperCollectiv',
          network: 'ethereum',
          primaryInterface: 'erc_721',
          symbol: 'BLOB',
          createat: '2023-01-11T10:00:18.687Z',
          updateat: '2023-01-16T10:52:03.000Z'
        },
        {
          contract: '0x000000873ee8c0be5b00d4b16723519e728a7420',
          description: "MetaUnicorn is metaversion and unicorn, it's also the meta, the universe and the unicorn.",
          externalurl: '',
          imageurl: 'https://i.seadn.io/gae/agYlnCjQU1-DYwSkn6JoHg1zZPBtD6HsMvbT83hIqN38YwQCKyS_RjcaWow0uj_2OhRM9HpAKviGKIeCRkVg5ZwU3uqr4bRV1G_-IQ?w=500&auto=format',
          name: 'Unicorn',
          network: 'ethereum',
          primaryInterface: 'erc_721',
          symbol: 'UNI',
          createat: '2023-01-11T09:51:52.927Z',
          updateat: '2023-01-16T10:52:03.000Z'
        },
        ...
      ],
      cursor: 0x000000f36edb9d436be73cdbf0dca7df3e6f3a50
}
```

### Token

This category of interfaces is mainly for obtaining Token-related information (currently supports ETH and Polygon).

1. Get the Token list
   - contract: Contract address (optional)
   - network: 'ethereum' or 'polygon' (optional)
   - limit: Number of items per list, maximum 50 (optional)
   - cursor: Address where the next cursor starts (optional)

```js
// request
import { getTokenList } from 'knn3-sdk';
const result = await getTokenList(
      undefined,
      undefined,
      5,
      '0x000000777697bdb425a417495743088dc664b10b'
)
``` 

```js
// response  
;
{
      list: [
        {
          contract: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
          name: 'Aave Token',
          symbol: 'AAVE',
          decimal: '18',
          network: 'ethereum'
        }
      ],
      cursor: 'null'
 }
```

### Lens

This category of interfaces is mainly for obtaining Lens-related information.

1. Get the Lens profile list
   - handle: Lens handle (optional)
   - profileId: Lens profile ID (optional)
   - limit: Number of items per list, maximum 50 (optional)
   - cursor: Address where the next cursor starts (optional)

```js
// request
import { getLensList } from 'knn3-sdk';
const result = await getLensList('shadow88sky.lens')
``` 

```js
// response
;
{
      list: [
        {
          profileId: 104724,
          creator: '0x1eec6eccaa4625da3fa6cd6339dbcc2418710e8a',
          to: '0x88520c10ad3d35ad2d3220cde446ccb33f09331b',
          handle: 'shadow88sky.lens',
          imageURI: '',
          followModule: '0x0000000000000000000000000000000000000000',
          metadata: 'ipfs://QmTS7bVbdwkfMBGkmJdMfEbbCbkUhKMYhoXQY2SsUipC8H',
          address: '0x88520c10ad3d35ad2d3220cde446ccb33f09331b'
        }
      ],
      cursor: null
 }
```

2. Get the list of follower addresses for a Lens

   - profileId: Lens profile ID (optional)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

```js
// request
import { getLensFollowers } from 'knn3-sdk';
const result = await getLensFollowers(104724)
``` 

```js
// response
;
{
      list: [
        {
          addr: '0x03a1eaa3a8e65b2e64939d6877f3b9b879eedeae',
          name: null,
          ens: []
        },
        {
          addr: '0x061812f31da031193143c6c2a5f2e96c0fca9edd',
          name: null,
          ens: []
        },
        {
          addr: '0x0992ad07cab0fb403e913e1cb57a226526502602',
          name: null,
          ens: []
        },
        ...
      ],
      cursor: 0x91ee4a49a2a498711da2e259f1e91c64b6723917
 }
```

3. Get publications

   - profileId: Lens profile ID (optional)

   - pubId: Lens publication ID (optional)

   - type: 'Comment' | 'Post' | 'Mirror' (optional)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

```js
// request
import { getLensPublications } from 'knn3-sdk';
result = await getLensPublications(104724, undefined, 'Mirror', 1, 1161695)
``` 

```js
// response
;
{
      list: [
        {
          id: 1161695,
          profileId: 104724,
          pubId: 5,
          contentURI: null,
          profileIdPointed: 66955,
          pubIdPointed: 1,
          referenceModuleData: null,
          collectModule: null,
          collectModuleReturnData: null,
          referenceModule: '0x0000000000000000000000000000000000000000',
          referenceModuleReturnData: null,
          type: 'Mirror',
          timestamp: 1669888756,
          transactionHash: '0xac442706a049089f25f5f82d06e5a262196999eb20b244bc41f135c513d38116',
          blockNumber: 36289682
        }
        ...
      ],
      cursor: 1161703
 }
```

4. Get Rate    

    - profileId: Lens profile ID(required)   
    
```js
// request
import { getLensRate } from 'knn3-sdk'; 
result = await getLensRate(5)
``` 

```js
// response
;
 {
      profileId: '5',
      address: '0x7241dddec3a6af367882eaf9651b87e1c7549dff',
      influ_level: 11,
      influ_level_str: 'SS',  // Get more followers, especially who has high Influence level
      campaign_level: 11,
      campaign_level_str: 'SS', // Get more comments and mirrors by others, especially who has high Campaign level
      engager_level: 10,
      engager_level_str: 'S+',  // Give more comments and mirrors to others, especially who has high Engagement level
      creator_level: 11,
      creator_level_str: 'SS',  // Get more collects by others
      collector_level: 10,
      collector_level_str: 'S+',  // Collect more publications of others
      curator_level: 11,
      curator_level_str: 'SS',  // Improve the referral efficiency of your mirrors 
      overall_level_score: 64,
      overall_level_rank: 1,
      overall_level: 11,
      overall_level_str: 'SS'
    }
```

5. get lens Rank
    * type: 'engager' | 'creator'| 'collector'| 'influ'| 'campaign'| 'curator'| 'overall' (required)
```js
import { getLensRank } from 'knn3-sdk'; 
result = await getLensRank('engager')
```

```js
// response
;
 [{
  rank: 1,
  profileId: '1'
 }]
```

### bit

This category of interfaces is mainly for obtaining .bit related information.

1. Get the .bit list
   - account: .bit account (optional)
   - addr: Address (optional)
   - limit: Number of items per list, maximum 50 (optional)
   - cursor: Address where the next cursor starts (optional)

```js
// request
import { getBitList } from 'knn3-sdk';
const result = await getBitList(
      undefined,
      '0xeab07120cdecc4a4ffaeddccd8cc508cd42702a1'
)
``` 

```js
// response    

{
      list: [
        {
          addr: '0xeab07120cdecc4a4ffaeddccd8cc508cd42702a1',
          account: '0005555.bit',
          algorithmId: 5,
          chain: 'EVM',
          outpoint: '0x3f6a58b1e8dc3618c871e0a0e8d9b86cffcff094613389f3b151f91526a64e38-0'
        }
      ],
      cursor: null
}
```

### hashkey

This category of interfaces is mainly for obtaining hashkey related information.

1. Get the did list
   - did: hashkey did (optional)
   - addr: Address (optional)
   - limit: Number of items per list, maximum 50 (optional)
   - cursor: Address where the next cursor starts (optional)    

```js
// request
import { getHashkeyList } from 'knn3-sdk'; 
const result = await getHashkeyList('shadow88sky',undefined,2)
```

```js
// response
{
      list: [
        {
          chain: '137',
          tx_hash: '0x0x39cf7e9f9e983e615c9df4d1cfad059528109e72fe7f526b122967ec66519560',
          log_index: '217',
          block_number: '41661746',
          tx_index: '56',
          owner: '0x88520C10ad3d35aD2D3220CdE446CcB33f09331B',
          contract: '0x7fDd3f96cBDE51737A9E24b461E7E92A057C3BBf',
          token_id: '43288774018209114666072661109206283848131676493678691273260165003966608687089',
          uri: 'https://api.hashkey.id/did/api/nft/metadata/43288774018209114666072661109206283848131676493678691273260165003966608687089',
          name: 'shadow88sky.key',
          did: 'shadow88sky',
          avatar: 'https://api.hashkey.id/did/api/file/avatar_8c767722-7d98-4c4c-b0c9-05dda43dda9e.png'
        }
      ],
      cursor: null
    }
```

### spaceId

This category of interfaces is mainly for obtaining spaceId related information.

1. Get the spaceId list
   - spaceId: spaceId domain (optional)
   - addr: Address (optional)
   - limit: Number of items per list, maximum 50 (optional)
   - cursor: Address where the next cursor starts (optional)

```js
// request
import { getSpaceIdList } from 'knn3-sdk';
const result = await getSpaceIdList(undefined, undefined, 10, '¥1000.bnb')
``` 

```js
// response

{
      list: [
         {
          name: '¥1000.bnb',
          address: '0x52e2a414c65bd8ea41b6c5b5276ed9452ecad088'
        },
        {
          name: '￥1000.bnb',
          address: '0x7009e5c74b3b3f28e622909e5a987e6f0e915cb7'
        },
        {
          name: '¥1111.bnb',
          address: '0xb3ab01b6cef001ddb270c1181a469cfdc51d4171'
        },
      ],
      cursor: '￥8888.bnb'
}
```

### Proposal
This category of interfaces is mainly for obtaining Proposal related information.

1.  Get the Proposal info
    * proposalId: proposal id(required)

```js
// request
import { getProposalInfo } from 'knn3-sdk'; 
let result = await getProposalInfo('qmudr849bdq1b7klfjstseptkcmyv65dost2ry4phbms4j')
``` 

```js
// response

{
      spaceId: 'ladz.eth',
      proposalId: 'QmUdr849BDQ1B7kLfJsTSePTkcmyV65DoST2ry4PhbmS4J',
      proposalAuthor: '0x279a3fdbd6d6252afc5c422439c7d7859a51a05e',
      proposalTitle: 'Should LADZ City Setup Bounties on Coinvise?'
}
```
