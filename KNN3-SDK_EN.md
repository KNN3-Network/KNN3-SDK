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
- [License](#license)

## Install

```js
npm i knn3-sdk
```

## Description

```
1. For performance reasons, all list interfaces have a maximum data limit of 50 per request (if the limit is exceeded, only 50 data entries will be returned).
2. If there is more data on the next page, a cursor will be returned. Please include the cursor when requesting the next page of data.
3. All functions have been added with unit tests. For specific usage, please refer to the unit test implementation.
4. For optional parameters, if there are any empty fields, please fill in with 'undefined'.
5. Refer to the TypeScript definitions for specific parameter structures and return value models.
6. To increase the access frequency limit (default is 10 times per minute), the SDK needs to apply for and set a key. The method for setting a key is as follows:
```

```js
import { setAuthKey } from 'knn3-sdk'
setAuthKey('your-api-key')
```

## Apply for API Key
You can choose any of the following methods to apply for an API key：
1. Contact us：builder@knn3.xyz
2. Apply from [Transformer](https://transformer.knn3.xyz/) platform (to be released officially)
   1. Connect wallet and bind email
   2. Go to Create API Key page, enter API Key purpose
   3. Copy API Key, configure through "setAuthKey" method
   
## Address

This category of interfaces mainly retrieves wallet addresses and some related information.

1. Get wallet information by address

```js
import { getAddr } from 'knn3-sdk';

const addr = await getAddr(address)
```

2. Get address list 

   Request parameters:

   - addressIn: List of addresses to query (optional)

   - limit: Number of items per list, up to 50 (optional)

   - cursor: The starting address of the next cursor (optional)

```js
import { getAddrList } from 'knn3-sdk';

const result = await getAddrList()
```

3. Get POAPs attended by the address 

   Request parameters:

   - address: Wallet address (required)

   - eventName: POAP name (optional)

   - limit: Number of items per list, up to 50 (optional)

   - cursor: The starting address of the next cursor (optional)

```js
import { attendEvents } from 'knn3-sdk';

const result = await attendEvents(
      '0x535824c63d3421c703cb022aba55c321a6e30bf4',
      'eth',
      2,
      'ethberlinzwei'
    )
```

4. Get Twitter accounts bound to the address 

   Request parameters:

   - address: Wallet address (required)

   - limit: Number of items per list, up to 50 (optional)

   - cursor: The starting address of the next cursor (optional)

```js
import { boundTwitter } from 'knn3-sdk';
const result = await boundTwitter('0x035d1fa6e5967624f0cd424892994717ea9fc2d8')
```

5. Get avatars bound to the address 

   Request parameters:

   - address: Wallet address (required)

   - limit: Number of items per list, up to 50 (optional)

   - cursor: The starting address of the next cursor (optional)

```js
import { boundAvatars } from 'knn3-sdk';
const result = await boundAvatars(
      '0x790116d0685eb197b886dacad9c247f785987a4a'
    )
```

6. Get NFTs held by the address 

   Request parameters:

   - address: Wallet address (required)

   - network: 'ethereum' or 'polygon' (required)
   - limit: Number of items per list, up to 50 (optional)

   - cursor: The starting address of the next cursor (optional)

```js
import { holdNfts } from 'knn3-sdk';
let result = await holdNfts(
      '0x88520C10ad3d35aD2D3220CdE446CcB33f09331B',
      'ethereum'
    )
```

7. Get tokens held by an address 

   Request parameters:

   - address: Wallet address (required)

   - network: 'ethereum' or 'polygon' (required)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

```js
import { holdTokens } from 'knn3-sdk';
let result = await holdTokens(
      '0x88520C10ad3d35aD2D3220CdE446CcB33f09331B',
      'ethereum'
    )
```

8. Get address-bound .bit 

   Request parameters:

   - address: Wallet address (required)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

```js
import { boundBits } from 'knn3-sdk';
const result = await boundBits(
      '0x790116d0685eb197b886dacad9c247f785987a4a'
    )
```

9. Get address-bound spaceId 

   Request parameters:

   - address: Wallet address (required)

   - limit: Number of items per list, maximum 50 (optional)
   - cursor: Address where the next cursor starts (optional)

```js
import { boundSpaceIds } from 'knn3-sdk';
const result = await boundSpaceIds(
      '0x790116d0685eb197b886dacad9c247f785987a4a'
    )
```

### Event

This category of interfaces is mainly for obtaining POAP events.

1. Request POAP information by id

```js
import { getEvent } from 'knn3-sdk';

const event = await getEvent('1')
```

2. Get POAP event list

   Request parameters:

   - name: POAP's name (fuzzy match, optional)

   - nameIn: List of POAPs to query (array exact match, optional)

   - cursor: Address where the next cursor starts (optional)

   - limit: Number of items per list, maximum 50 (optional)

```js
import { getEventList } from 'knn3-sdk';

const result = await getEventList('eth')
```

3. Get the participating addresses of a specific POAP

   Request parameters: 

   * id: POAP's id (required) 

   * address: Participating address (optional) 

   * limit: Number of items per list, maximum 50 (optional) 

   * cursor: Address where the next cursor starts (optional)

```js
const result = await getEventAddr('10203')
```

### Twitter

This category of interfaces is mainly for obtaining Twitter-related binding information.

1. Get Twitter list information 

   Request parameters:

   - name: Twitter's name (fuzzy match, optional)
   - cursor: Address where the next cursor starts (optional)
   - limit: Number of items per list, maximum 50 (optional)

```js
import { getTwitterList } from 'knn3-sdk';

const result = await getTwitterList('chen')
```

2. View the bound address based on Twitter's Uid 

   Request parameters:

   - uid: Twitter's uid (required)

   - address: Participating address (optional)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

```js
import { getTwitterIncludeAddr } from 'knn3-sdk';

const result = await  getTwitterIncludeAddr('988064388702650370')
```

### Avatar

This category of interfaces is mainly for obtaining Avatar-related binding information.

1. Get the Avatar list 

   Request parameters:

   - avatar: Avatar (exact match, optional)
   - cursor: Address where the next cursor starts (optional)
   - limit: Number of items per list, maximum 50 (optional)

```js
import { getAvatarList } from 'knn3-sdk';
await getAvatarList(
      undefined,
      3,
      '0x0200c6fed045084ae0185b6cf290b60f42fd5769aa94b3c2e67a68cf2cf2847bde'
    )
```

2. Get the address bound with the Avatar

   Request parameters:

   - avatar: Avatar (required)

   - address: Participating address (optional)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

```js
import { getAvatarBindAddr } from 'knn3-sdk';
const result = await getAvatarBindAddr(
      '0x036fd654a9601ad7db0ae5cd811bf535019e5fdf441591afc676943c73750572e6'
    )
```

3. Get the Twitter bound with the Avatar 

   Request parameters:

   - avatar: Avatar (required)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

```js
import { getAvatarBindTwitter } from 'knn3-sdk';
 const result = await getAvatarBindTwitter(
      '0x036bb12a884a8ad71b35d2f6be0f6f2b97000921b0cae82a606fc56ffe685a47a5'
    )
```

### NFT

This category of interfaces is mainly for obtaining NFT-related information (currently supports ETH and Polygon).

1. Get the NFT list
   - contract: Contract address (optional)
   - network: 'ethereum' or 'polygon' (optional)
   - limit: Number of items per list, maximum 50 (optional)
   - cursor: Address where the next cursor starts (optional)

```js
import { getNftList } from 'knn3-sdk';
const result = await getNftList(
      undefined,
      undefined,
      5,
      '0x000000777697bdb425a417495743088dc664b10b'
    )
```

2. Get the address holding a certain type of NFT

   - contract: Contract address (required)

   - network: 'ethereum' or 'polygon' (required)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

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

This category of interfaces is mainly for obtaining Token-related information (currently supports ETH and Polygon).

1. Get the Token list
   - contract: Contract address (optional)
   - network: 'ethereum' or 'polygon' (optional)
   - limit: Number of items per list, maximum 50 (optional)
   - cursor: Address where the next cursor starts (optional)

```js
import { getTokenList } from 'knn3-sdk';
const result = await getTokenList(
      undefined,
      undefined,
      5,
      '0x000000777697bdb425a417495743088dc664b10b'
    )
```

2. Get the address holding a certain type of Token

   - contract: Contract address (required)

   - network: 'ethereum' or 'polygon' (required)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

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

This category of interfaces is mainly for obtaining Lens-related information.

1. Get the Lens profile list
   - handle: Lens handle (optional)
   - profileId: Lens profile ID (optional)
   - limit: Number of items per list, maximum 50 (optional)
   - cursor: Address where the next cursor starts (optional)

```js
import { getLensList } from 'knn3-sdk';
const result = await getLensList('shadow88sky.lens')
```

2. Get the list of follower addresses for a Lens

   - profileId: Lens profile ID (optional)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

```js
import { getLensFollowers } from 'knn3-sdk';
const result = await getLensFollowers(104724)
```

3. Get publications

   - profileId: Lens profile ID (optional)

   - pubId: Lens publication ID (optional)

   - type: 'Comment' | 'Post' | 'Mirror' (optional)

   - limit: Number of items per list, maximum 50 (optional)

   - cursor: Address where the next cursor starts (optional)

```js
import { getLensPublications } from 'knn3-sdk';
result = await getLensPublications(104724, undefined, 'Mirror', 1, 1161695)
```

### bit

This category of interfaces is mainly for obtaining .bit related information.

1. Get the .bit list
   - account: .bit account (optional)
   - addr: Address (optional)
   - limit: Number of items per list, maximum 50 (optional)
   - cursor: Address where the next cursor starts (optional)

```js
import { getBitList } from 'knn3-sdk';
const result = await getBitList(
      undefined,
      '0xeab07120cdecc4a4ffaeddccd8cc508cd42702a1'
    )
```

### spaceId

This category of interfaces is mainly for obtaining spaceId related information.

1. Get the spaceId list
   - spaceId: spaceId domain (optional)
   - addr: Address (optional)
   - limit: Number of items per list, maximum 50 (optional)
   - cursor: Address where the next cursor starts (optional)

```js
import { getSpaceIdList } from 'knn3-sdk';
const result = await getSpaceIdList(undefined, undefined, 10, '¥1000.bnb')
```
