import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};



export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type InputId = {
  id: Scalars['ID'];
};


export type LocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | ProductType | ProductTypeConnection | ProductTypeAggregator | ProductTypeGroupBy | ProductTypeConnectionId | ProductTypeConnection_Id | ProductTypeConnectionCreatedAt | ProductTypeConnectionUpdatedAt | ProductTypeConnectionName | ProductTypeConnectionCode | ProductTypeConnectionPublished_At | CreateProductTypePayload | UpdateProductTypePayload | DeleteProductTypePayload | Product | ProductConnection | ProductAggregator | ProductAggregatorSum | ProductAggregatorAvg | ProductAggregatorMin | ProductAggregatorMax | ProductGroupBy | ProductConnectionId | ProductConnection_Id | ProductConnectionCreatedAt | ProductConnectionUpdatedAt | ProductConnectionCode | ProductConnectionProduct_Type | ProductConnectionName | ProductConnectionDetail | ProductConnectionCost_Price | ProductConnectionSale_Price | ProductConnectionRemark | ProductConnectionPicture1 | ProductConnectionPicture2 | ProductConnectionPicture3 | ProductConnectionPicture1_Delete_Token | ProductConnectionPicture2_Delete_Token | ProductConnectionPicture3_Delete_Token | ProductConnectionPublished_At | CreateProductPayload | UpdateProductPayload | DeleteProductPayload | Service | ServiceConnection | ServiceAggregator | ServiceGroupBy | ServiceConnectionId | ServiceConnection_Id | ServiceConnectionCreatedAt | ServiceConnectionUpdatedAt | ServiceConnectionName | ServiceConnectionDesc | ServiceConnectionPublished_At | CreateServicePayload | UpdateServicePayload | DeleteServicePayload | Team | TeamConnection | TeamAggregator | TeamGroupBy | TeamConnectionId | TeamConnection_Id | TeamConnectionCreatedAt | TeamConnectionUpdatedAt | TeamConnectionName | TeamConnectionCountry | TeamConnectionPublished_At | CreateTeamPayload | UpdateTeamPayload | DeleteTeamPayload | Todo | TodoConnection | TodoAggregator | TodoGroupBy | TodoConnectionId | TodoConnection_Id | TodoConnectionCreatedAt | TodoConnectionUpdatedAt | TodoConnectionTitle | TodoConnectionFinished | TodoConnectionPublished_At | CreateTodoPayload | UpdateTodoPayload | DeleteTodoPayload | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnection_Id | UploadFileConnectionCreatedAt | UploadFileConnectionUpdatedAt | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnection_Id | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnection_Id | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionUpdatedAt | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createProductType?: Maybe<CreateProductTypePayload>;
  updateProductType?: Maybe<UpdateProductTypePayload>;
  deleteProductType?: Maybe<DeleteProductTypePayload>;
  createProduct?: Maybe<CreateProductPayload>;
  updateProduct?: Maybe<UpdateProductPayload>;
  deleteProduct?: Maybe<DeleteProductPayload>;
  createService?: Maybe<CreateServicePayload>;
  updateService?: Maybe<UpdateServicePayload>;
  deleteService?: Maybe<DeleteServicePayload>;
  createTeam?: Maybe<CreateTeamPayload>;
  updateTeam?: Maybe<UpdateTeamPayload>;
  deleteTeam?: Maybe<DeleteTeamPayload>;
  createTodo?: Maybe<CreateTodoPayload>;
  updateTodo?: Maybe<UpdateTodoPayload>;
  deleteTodo?: Maybe<DeleteTodoPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateProductTypeArgs = {
  input?: Maybe<CreateProductTypeInput>;
};


export type MutationUpdateProductTypeArgs = {
  input?: Maybe<UpdateProductTypeInput>;
};


export type MutationDeleteProductTypeArgs = {
  input?: Maybe<DeleteProductTypeInput>;
};


export type MutationCreateProductArgs = {
  input?: Maybe<CreateProductInput>;
};


export type MutationUpdateProductArgs = {
  input?: Maybe<UpdateProductInput>;
};


export type MutationDeleteProductArgs = {
  input?: Maybe<DeleteProductInput>;
};


export type MutationCreateServiceArgs = {
  input?: Maybe<CreateServiceInput>;
};


export type MutationUpdateServiceArgs = {
  input?: Maybe<UpdateServiceInput>;
};


export type MutationDeleteServiceArgs = {
  input?: Maybe<DeleteServiceInput>;
};


export type MutationCreateTeamArgs = {
  input?: Maybe<CreateTeamInput>;
};


export type MutationUpdateTeamArgs = {
  input?: Maybe<UpdateTeamInput>;
};


export type MutationDeleteTeamArgs = {
  input?: Maybe<DeleteTeamInput>;
};


export type MutationCreateTodoArgs = {
  input?: Maybe<CreateTodoInput>;
};


export type MutationUpdateTodoArgs = {
  input?: Maybe<UpdateTodoInput>;
};


export type MutationDeleteTodoArgs = {
  input?: Maybe<DeleteTodoInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code?: Maybe<Scalars['String']>;
  product_type?: Maybe<ProductType>;
  name?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  cost_price?: Maybe<Scalars['Int']>;
  sale_price?: Maybe<Scalars['Int']>;
  remark?: Maybe<Scalars['String']>;
  picture1?: Maybe<Scalars['String']>;
  picture2?: Maybe<Scalars['String']>;
  picture3?: Maybe<Scalars['String']>;
  picture1_delete_token?: Maybe<Scalars['String']>;
  picture2_delete_token?: Maybe<Scalars['String']>;
  picture3_delete_token?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ProductAggregator = {
  __typename?: 'ProductAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ProductAggregatorSum>;
  avg?: Maybe<ProductAggregatorAvg>;
  min?: Maybe<ProductAggregatorMin>;
  max?: Maybe<ProductAggregatorMax>;
};

export type ProductAggregatorAvg = {
  __typename?: 'ProductAggregatorAvg';
  cost_price?: Maybe<Scalars['Float']>;
  sale_price?: Maybe<Scalars['Float']>;
};

export type ProductAggregatorMax = {
  __typename?: 'ProductAggregatorMax';
  cost_price?: Maybe<Scalars['Float']>;
  sale_price?: Maybe<Scalars['Float']>;
};

export type ProductAggregatorMin = {
  __typename?: 'ProductAggregatorMin';
  cost_price?: Maybe<Scalars['Float']>;
  sale_price?: Maybe<Scalars['Float']>;
};

export type ProductAggregatorSum = {
  __typename?: 'ProductAggregatorSum';
  cost_price?: Maybe<Scalars['Float']>;
  sale_price?: Maybe<Scalars['Float']>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  values?: Maybe<Array<Maybe<Product>>>;
  groupBy?: Maybe<ProductGroupBy>;
  aggregate?: Maybe<ProductAggregator>;
};

export type ProductConnectionCode = {
  __typename?: 'ProductConnectionCode';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionCost_Price = {
  __typename?: 'ProductConnectionCost_price';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionCreatedAt = {
  __typename?: 'ProductConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionDetail = {
  __typename?: 'ProductConnectionDetail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionId = {
  __typename?: 'ProductConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionName = {
  __typename?: 'ProductConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionPicture1 = {
  __typename?: 'ProductConnectionPicture1';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionPicture1_Delete_Token = {
  __typename?: 'ProductConnectionPicture1_delete_token';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionPicture2 = {
  __typename?: 'ProductConnectionPicture2';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionPicture2_Delete_Token = {
  __typename?: 'ProductConnectionPicture2_delete_token';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionPicture3 = {
  __typename?: 'ProductConnectionPicture3';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionPicture3_Delete_Token = {
  __typename?: 'ProductConnectionPicture3_delete_token';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionProduct_Type = {
  __typename?: 'ProductConnectionProduct_type';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionPublished_At = {
  __typename?: 'ProductConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionRemark = {
  __typename?: 'ProductConnectionRemark';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionSale_Price = {
  __typename?: 'ProductConnectionSale_price';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionUpdatedAt = {
  __typename?: 'ProductConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnection_Id = {
  __typename?: 'ProductConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  id?: Maybe<Array<Maybe<ProductConnectionId>>>;
  _id?: Maybe<Array<Maybe<ProductConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ProductConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ProductConnectionUpdatedAt>>>;
  code?: Maybe<Array<Maybe<ProductConnectionCode>>>;
  product_type?: Maybe<Array<Maybe<ProductConnectionProduct_Type>>>;
  name?: Maybe<Array<Maybe<ProductConnectionName>>>;
  detail?: Maybe<Array<Maybe<ProductConnectionDetail>>>;
  cost_price?: Maybe<Array<Maybe<ProductConnectionCost_Price>>>;
  sale_price?: Maybe<Array<Maybe<ProductConnectionSale_Price>>>;
  remark?: Maybe<Array<Maybe<ProductConnectionRemark>>>;
  picture1?: Maybe<Array<Maybe<ProductConnectionPicture1>>>;
  picture2?: Maybe<Array<Maybe<ProductConnectionPicture2>>>;
  picture3?: Maybe<Array<Maybe<ProductConnectionPicture3>>>;
  picture1_delete_token?: Maybe<Array<Maybe<ProductConnectionPicture1_Delete_Token>>>;
  picture2_delete_token?: Maybe<Array<Maybe<ProductConnectionPicture2_Delete_Token>>>;
  picture3_delete_token?: Maybe<Array<Maybe<ProductConnectionPicture3_Delete_Token>>>;
  published_at?: Maybe<Array<Maybe<ProductConnectionPublished_At>>>;
};

export type ProductInput = {
  code?: Maybe<Scalars['String']>;
  product_type?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  cost_price?: Maybe<Scalars['Int']>;
  sale_price?: Maybe<Scalars['Int']>;
  remark?: Maybe<Scalars['String']>;
  picture1?: Maybe<Scalars['String']>;
  picture2?: Maybe<Scalars['String']>;
  picture3?: Maybe<Scalars['String']>;
  picture1_delete_token?: Maybe<Scalars['String']>;
  picture2_delete_token?: Maybe<Scalars['String']>;
  picture3_delete_token?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ProductType = {
  __typename?: 'ProductType';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  products?: Maybe<Array<Maybe<Product>>>;
};


export type ProductTypeProductsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProductTypeAggregator = {
  __typename?: 'ProductTypeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductTypeConnection = {
  __typename?: 'ProductTypeConnection';
  values?: Maybe<Array<Maybe<ProductType>>>;
  groupBy?: Maybe<ProductTypeGroupBy>;
  aggregate?: Maybe<ProductTypeAggregator>;
};

export type ProductTypeConnectionCode = {
  __typename?: 'ProductTypeConnectionCode';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductTypeConnection>;
};

export type ProductTypeConnectionCreatedAt = {
  __typename?: 'ProductTypeConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductTypeConnection>;
};

export type ProductTypeConnectionId = {
  __typename?: 'ProductTypeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductTypeConnection>;
};

export type ProductTypeConnectionName = {
  __typename?: 'ProductTypeConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductTypeConnection>;
};

export type ProductTypeConnectionPublished_At = {
  __typename?: 'ProductTypeConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductTypeConnection>;
};

export type ProductTypeConnectionUpdatedAt = {
  __typename?: 'ProductTypeConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductTypeConnection>;
};

export type ProductTypeConnection_Id = {
  __typename?: 'ProductTypeConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductTypeConnection>;
};

export type ProductTypeGroupBy = {
  __typename?: 'ProductTypeGroupBy';
  id?: Maybe<Array<Maybe<ProductTypeConnectionId>>>;
  _id?: Maybe<Array<Maybe<ProductTypeConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ProductTypeConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ProductTypeConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<ProductTypeConnectionName>>>;
  code?: Maybe<Array<Maybe<ProductTypeConnectionCode>>>;
  published_at?: Maybe<Array<Maybe<ProductTypeConnectionPublished_At>>>;
};

export type ProductTypeInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  productType?: Maybe<ProductType>;
  productTypes?: Maybe<Array<Maybe<ProductType>>>;
  productTypesConnection?: Maybe<ProductTypeConnection>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  productsConnection?: Maybe<ProductConnection>;
  service?: Maybe<Service>;
  services?: Maybe<Array<Maybe<Service>>>;
  servicesConnection?: Maybe<ServiceConnection>;
  team?: Maybe<Team>;
  teams?: Maybe<Array<Maybe<Team>>>;
  teamsConnection?: Maybe<TeamConnection>;
  todo?: Maybe<Todo>;
  todos?: Maybe<Array<Maybe<Todo>>>;
  todosConnection?: Maybe<TodoConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryProductTypeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProductTypesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryProductTypesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProductsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryProductsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryServiceArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryServicesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryServicesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTeamArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTeamsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryTeamsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTodoArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTodosArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryTodosConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Service = {
  __typename?: 'Service';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ServiceAggregator = {
  __typename?: 'ServiceAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ServiceConnection = {
  __typename?: 'ServiceConnection';
  values?: Maybe<Array<Maybe<Service>>>;
  groupBy?: Maybe<ServiceGroupBy>;
  aggregate?: Maybe<ServiceAggregator>;
};

export type ServiceConnectionCreatedAt = {
  __typename?: 'ServiceConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionDesc = {
  __typename?: 'ServiceConnectionDesc';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionId = {
  __typename?: 'ServiceConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionName = {
  __typename?: 'ServiceConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionPublished_At = {
  __typename?: 'ServiceConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionUpdatedAt = {
  __typename?: 'ServiceConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnection_Id = {
  __typename?: 'ServiceConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceGroupBy = {
  __typename?: 'ServiceGroupBy';
  id?: Maybe<Array<Maybe<ServiceConnectionId>>>;
  _id?: Maybe<Array<Maybe<ServiceConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ServiceConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ServiceConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<ServiceConnectionName>>>;
  desc?: Maybe<Array<Maybe<ServiceConnectionDesc>>>;
  published_at?: Maybe<Array<Maybe<ServiceConnectionPublished_At>>>;
};

export type ServiceInput = {
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type TeamAggregator = {
  __typename?: 'TeamAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TeamConnection = {
  __typename?: 'TeamConnection';
  values?: Maybe<Array<Maybe<Team>>>;
  groupBy?: Maybe<TeamGroupBy>;
  aggregate?: Maybe<TeamAggregator>;
};

export type TeamConnectionCountry = {
  __typename?: 'TeamConnectionCountry';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionCreatedAt = {
  __typename?: 'TeamConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionId = {
  __typename?: 'TeamConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionName = {
  __typename?: 'TeamConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionPublished_At = {
  __typename?: 'TeamConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionUpdatedAt = {
  __typename?: 'TeamConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnection_Id = {
  __typename?: 'TeamConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamGroupBy = {
  __typename?: 'TeamGroupBy';
  id?: Maybe<Array<Maybe<TeamConnectionId>>>;
  _id?: Maybe<Array<Maybe<TeamConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<TeamConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<TeamConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<TeamConnectionName>>>;
  country?: Maybe<Array<Maybe<TeamConnectionCountry>>>;
  published_at?: Maybe<Array<Maybe<TeamConnectionPublished_At>>>;
};

export type TeamInput = {
  name?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  finished?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type TodoAggregator = {
  __typename?: 'TodoAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TodoConnection = {
  __typename?: 'TodoConnection';
  values?: Maybe<Array<Maybe<Todo>>>;
  groupBy?: Maybe<TodoGroupBy>;
  aggregate?: Maybe<TodoAggregator>;
};

export type TodoConnectionCreatedAt = {
  __typename?: 'TodoConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TodoConnection>;
};

export type TodoConnectionFinished = {
  __typename?: 'TodoConnectionFinished';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<TodoConnection>;
};

export type TodoConnectionId = {
  __typename?: 'TodoConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TodoConnection>;
};

export type TodoConnectionPublished_At = {
  __typename?: 'TodoConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TodoConnection>;
};

export type TodoConnectionTitle = {
  __typename?: 'TodoConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TodoConnection>;
};

export type TodoConnectionUpdatedAt = {
  __typename?: 'TodoConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TodoConnection>;
};

export type TodoConnection_Id = {
  __typename?: 'TodoConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TodoConnection>;
};

export type TodoGroupBy = {
  __typename?: 'TodoGroupBy';
  id?: Maybe<Array<Maybe<TodoConnectionId>>>;
  _id?: Maybe<Array<Maybe<TodoConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<TodoConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<TodoConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<TodoConnectionTitle>>>;
  finished?: Maybe<Array<Maybe<TodoConnectionFinished>>>;
  published_at?: Maybe<Array<Maybe<TodoConnectionPublished_At>>>;
};

export type TodoInput = {
  title?: Maybe<Scalars['String']>;
  finished?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type CreateProductInput = {
  data?: Maybe<ProductInput>;
};

export type CreateProductPayload = {
  __typename?: 'createProductPayload';
  product?: Maybe<Product>;
};

export type CreateProductTypeInput = {
  data?: Maybe<ProductTypeInput>;
};

export type CreateProductTypePayload = {
  __typename?: 'createProductTypePayload';
  productType?: Maybe<ProductType>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateServiceInput = {
  data?: Maybe<ServiceInput>;
};

export type CreateServicePayload = {
  __typename?: 'createServicePayload';
  service?: Maybe<Service>;
};

export type CreateTeamInput = {
  data?: Maybe<TeamInput>;
};

export type CreateTeamPayload = {
  __typename?: 'createTeamPayload';
  team?: Maybe<Team>;
};

export type CreateTodoInput = {
  data?: Maybe<TodoInput>;
};

export type CreateTodoPayload = {
  __typename?: 'createTodoPayload';
  todo?: Maybe<Todo>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteProductInput = {
  where?: Maybe<InputId>;
};

export type DeleteProductPayload = {
  __typename?: 'deleteProductPayload';
  product?: Maybe<Product>;
};

export type DeleteProductTypeInput = {
  where?: Maybe<InputId>;
};

export type DeleteProductTypePayload = {
  __typename?: 'deleteProductTypePayload';
  productType?: Maybe<ProductType>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteServiceInput = {
  where?: Maybe<InputId>;
};

export type DeleteServicePayload = {
  __typename?: 'deleteServicePayload';
  service?: Maybe<Service>;
};

export type DeleteTeamInput = {
  where?: Maybe<InputId>;
};

export type DeleteTeamPayload = {
  __typename?: 'deleteTeamPayload';
  team?: Maybe<Team>;
};

export type DeleteTodoInput = {
  where?: Maybe<InputId>;
};

export type DeleteTodoPayload = {
  __typename?: 'deleteTodoPayload';
  todo?: Maybe<Todo>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProductInput = {
  code?: Maybe<Scalars['String']>;
  product_type?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  cost_price?: Maybe<Scalars['Int']>;
  sale_price?: Maybe<Scalars['Int']>;
  remark?: Maybe<Scalars['String']>;
  picture1?: Maybe<Scalars['String']>;
  picture2?: Maybe<Scalars['String']>;
  picture3?: Maybe<Scalars['String']>;
  picture1_delete_token?: Maybe<Scalars['String']>;
  picture2_delete_token?: Maybe<Scalars['String']>;
  picture3_delete_token?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProductTypeInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditServiceInput = {
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTeamInput = {
  name?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTodoInput = {
  title?: Maybe<Scalars['String']>;
  finished?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateProductInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProductInput>;
};

export type UpdateProductPayload = {
  __typename?: 'updateProductPayload';
  product?: Maybe<Product>;
};

export type UpdateProductTypeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProductTypeInput>;
};

export type UpdateProductTypePayload = {
  __typename?: 'updateProductTypePayload';
  productType?: Maybe<ProductType>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateServiceInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditServiceInput>;
};

export type UpdateServicePayload = {
  __typename?: 'updateServicePayload';
  service?: Maybe<Service>;
};

export type UpdateTeamInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTeamInput>;
};

export type UpdateTeamPayload = {
  __typename?: 'updateTeamPayload';
  team?: Maybe<Team>;
};

export type UpdateTodoInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTodoInput>;
};

export type UpdateTodoPayload = {
  __typename?: 'updateTodoPayload';
  todo?: Maybe<Todo>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateServiceMutationVariables = Exact<{
  service?: Maybe<ServiceInput>;
}>;


export type CreateServiceMutation = (
  { __typename?: 'Mutation' }
  & { createService?: Maybe<(
    { __typename?: 'createServicePayload' }
    & { service?: Maybe<(
      { __typename?: 'Service' }
      & Pick<Service, 'id' | 'name' | 'createdAt'>
    )> }
  )> }
);

export type UpdateServiceMutationVariables = Exact<{
  id: Scalars['ID'];
  service?: Maybe<EditServiceInput>;
}>;


export type UpdateServiceMutation = (
  { __typename?: 'Mutation' }
  & { updateService?: Maybe<(
    { __typename?: 'updateServicePayload' }
    & { service?: Maybe<(
      { __typename?: 'Service' }
      & Pick<Service, 'id'>
    )> }
  )> }
);

export type DeleteServiceMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteServiceMutation = (
  { __typename?: 'Mutation' }
  & { deleteService?: Maybe<(
    { __typename?: 'deleteServicePayload' }
    & { service?: Maybe<(
      { __typename?: 'Service' }
      & Pick<Service, 'id' | 'name'>
    )> }
  )> }
);

export type CreateProductTypeMutationVariables = Exact<{
  pt?: Maybe<ProductTypeInput>;
}>;


export type CreateProductTypeMutation = (
  { __typename?: 'Mutation' }
  & { createProductType?: Maybe<(
    { __typename?: 'createProductTypePayload' }
    & { productType?: Maybe<(
      { __typename?: 'ProductType' }
      & Pick<ProductType, 'id'>
    )> }
  )> }
);

export type UpdateProductTypeMutationVariables = Exact<{
  id: Scalars['ID'];
  productType?: Maybe<EditProductTypeInput>;
}>;


export type UpdateProductTypeMutation = (
  { __typename?: 'Mutation' }
  & { updateProductType?: Maybe<(
    { __typename?: 'updateProductTypePayload' }
    & { productType?: Maybe<(
      { __typename?: 'ProductType' }
      & Pick<ProductType, 'id'>
    )> }
  )> }
);

export type DeleteProductTypeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProductTypeMutation = (
  { __typename?: 'Mutation' }
  & { deleteProductType?: Maybe<(
    { __typename?: 'deleteProductTypePayload' }
    & { productType?: Maybe<(
      { __typename?: 'ProductType' }
      & Pick<ProductType, 'id' | 'name'>
    )> }
  )> }
);

export type CreateProductMutationVariables = Exact<{
  p?: Maybe<ProductInput>;
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct?: Maybe<(
    { __typename?: 'createProductPayload' }
    & { product?: Maybe<(
      { __typename?: 'Product' }
      & Pick<Product, 'id'>
    )> }
  )> }
);

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['ID'];
  product?: Maybe<EditProductInput>;
}>;


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct?: Maybe<(
    { __typename?: 'updateProductPayload' }
    & { product?: Maybe<(
      { __typename?: 'Product' }
      & Pick<Product, 'id'>
    )> }
  )> }
);

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & { deleteProduct?: Maybe<(
    { __typename?: 'deleteProductPayload' }
    & { product?: Maybe<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'name'>
    )> }
  )> }
);

export type AppLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AppLoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & Pick<UsersPermissionsLoginPayload, 'jwt'>
  ) }
);

export type CreateTeamMutationVariables = Exact<{
  team?: Maybe<TeamInput>;
}>;


export type CreateTeamMutation = (
  { __typename?: 'Mutation' }
  & { createTeam?: Maybe<(
    { __typename?: 'createTeamPayload' }
    & { team?: Maybe<(
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'name' | 'country'>
    )> }
  )> }
);

export type GetServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServicesQuery = (
  { __typename?: 'Query' }
  & { services?: Maybe<Array<Maybe<(
    { __typename?: 'Service' }
    & Pick<Service, 'id' | 'name' | 'updatedAt'>
  )>>> }
);

export type GetServiceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetServiceQuery = (
  { __typename?: 'Query' }
  & { service?: Maybe<(
    { __typename?: 'Service' }
    & Pick<Service, 'id' | 'name' | 'desc' | 'updatedAt'>
  )> }
);

export type SearchByNameQueryVariables = Exact<{
  name_contains: Scalars['String'];
}>;


export type SearchByNameQuery = (
  { __typename?: 'Query' }
  & { services?: Maybe<Array<Maybe<(
    { __typename?: 'Service' }
    & Pick<Service, 'id' | 'name' | 'desc' | 'updatedAt'>
  )>>> }
);

export type GetProductTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductTypesQuery = (
  { __typename?: 'Query' }
  & { productTypes?: Maybe<Array<Maybe<(
    { __typename?: 'ProductType' }
    & Pick<ProductType, 'id' | 'name' | 'code' | 'updatedAt'>
  )>>> }
);

export type GetProductTypeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductTypeQuery = (
  { __typename?: 'Query' }
  & { productType?: Maybe<(
    { __typename?: 'ProductType' }
    & Pick<ProductType, 'id' | 'name' | 'code' | 'updatedAt'>
  )> }
);

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'code' | 'name' | 'detail' | 'cost_price' | 'sale_price' | 'remark' | 'picture1' | 'picture2' | 'picture3' | 'picture1_delete_token' | 'picture2_delete_token' | 'picture3_delete_token' | 'updatedAt'>
    & { product_type?: Maybe<(
      { __typename?: 'ProductType' }
      & Pick<ProductType, 'id' | 'name'>
    )> }
  )>>>, productTypes?: Maybe<Array<Maybe<(
    { __typename?: 'ProductType' }
    & Pick<ProductType, 'id' | 'name'>
  )>>> }
);

export type GetProductsByTypeQueryVariables = Exact<{
  type?: Maybe<Scalars['ID']>;
}>;


export type GetProductsByTypeQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'code' | 'name' | 'detail' | 'cost_price' | 'sale_price' | 'remark' | 'picture1' | 'picture2' | 'picture3' | 'picture1_delete_token' | 'picture2_delete_token' | 'picture3_delete_token' | 'updatedAt'>
    & { product_type?: Maybe<(
      { __typename?: 'ProductType' }
      & Pick<ProductType, 'id' | 'name'>
    )> }
  )>>> }
);

export type GetProductsByNameQueryVariables = Exact<{
  name?: Maybe<Scalars['String']>;
}>;


export type GetProductsByNameQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'code' | 'name' | 'detail' | 'cost_price' | 'sale_price' | 'remark' | 'picture1' | 'picture2' | 'picture3' | 'picture1_delete_token' | 'picture2_delete_token' | 'picture3_delete_token' | 'updatedAt'>
    & { product_type?: Maybe<(
      { __typename?: 'ProductType' }
      & Pick<ProductType, 'id' | 'name'>
    )> }
  )>>> }
);

export type GetProductsByTypeAndNameQueryVariables = Exact<{
  type?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
}>;


export type GetProductsByTypeAndNameQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'code' | 'name' | 'detail' | 'cost_price' | 'sale_price' | 'remark' | 'picture1' | 'picture2' | 'picture3' | 'picture1_delete_token' | 'picture2_delete_token' | 'picture3_delete_token' | 'updatedAt'>
    & { product_type?: Maybe<(
      { __typename?: 'ProductType' }
      & Pick<ProductType, 'id' | 'name'>
    )> }
  )>>> }
);

export type GetProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'code' | 'name' | 'detail' | 'cost_price' | 'sale_price' | 'remark' | 'picture1' | 'picture2' | 'picture3' | 'picture1_delete_token' | 'picture2_delete_token' | 'picture3_delete_token' | 'updatedAt'>
    & { product_type?: Maybe<(
      { __typename?: 'ProductType' }
      & Pick<ProductType, 'id' | 'name'>
    )> }
  )>, productTypes?: Maybe<Array<Maybe<(
    { __typename?: 'ProductType' }
    & Pick<ProductType, 'id' | 'name'>
  )>>> }
);

export type GetTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeamsQuery = (
  { __typename?: 'Query' }
  & { teams?: Maybe<Array<Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name' | 'country'>
  )>>> }
);

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = (
  { __typename?: 'Query' }
  & { todos?: Maybe<Array<Maybe<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title' | 'finished'>
  )>>> }
);

export type GetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllQuery = (
  { __typename?: 'Query' }
  & { teams?: Maybe<Array<Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name' | 'country'>
  )>>>, todos?: Maybe<Array<Maybe<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title' | 'finished'>
  )>>> }
);


export const CreateServiceDocument = gql`
    mutation CreateService($service: ServiceInput) {
  createService(input: {data: $service}) {
    service {
      id
      name
      createdAt
    }
  }
}
    `;
export type CreateServiceMutationFn = Apollo.MutationFunction<CreateServiceMutation, CreateServiceMutationVariables>;

/**
 * __useCreateServiceMutation__
 *
 * To run a mutation, you first call `useCreateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createServiceMutation, { data, loading, error }] = useCreateServiceMutation({
 *   variables: {
 *      service: // value for 'service'
 *   },
 * });
 */
export function useCreateServiceMutation(baseOptions?: Apollo.MutationHookOptions<CreateServiceMutation, CreateServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateServiceMutation, CreateServiceMutationVariables>(CreateServiceDocument, options);
      }
export type CreateServiceMutationHookResult = ReturnType<typeof useCreateServiceMutation>;
export type CreateServiceMutationResult = Apollo.MutationResult<CreateServiceMutation>;
export type CreateServiceMutationOptions = Apollo.BaseMutationOptions<CreateServiceMutation, CreateServiceMutationVariables>;
export const UpdateServiceDocument = gql`
    mutation UpdateService($id: ID!, $service: editServiceInput) {
  updateService(input: {data: $service, where: {id: $id}}) {
    service {
      id
    }
  }
}
    `;
export type UpdateServiceMutationFn = Apollo.MutationFunction<UpdateServiceMutation, UpdateServiceMutationVariables>;

/**
 * __useUpdateServiceMutation__
 *
 * To run a mutation, you first call `useUpdateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateServiceMutation, { data, loading, error }] = useUpdateServiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      service: // value for 'service'
 *   },
 * });
 */
export function useUpdateServiceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateServiceMutation, UpdateServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateServiceMutation, UpdateServiceMutationVariables>(UpdateServiceDocument, options);
      }
export type UpdateServiceMutationHookResult = ReturnType<typeof useUpdateServiceMutation>;
export type UpdateServiceMutationResult = Apollo.MutationResult<UpdateServiceMutation>;
export type UpdateServiceMutationOptions = Apollo.BaseMutationOptions<UpdateServiceMutation, UpdateServiceMutationVariables>;
export const DeleteServiceDocument = gql`
    mutation DeleteService($id: ID!) {
  deleteService(input: {where: {id: $id}}) {
    service {
      id
      name
    }
  }
}
    `;
export type DeleteServiceMutationFn = Apollo.MutationFunction<DeleteServiceMutation, DeleteServiceMutationVariables>;

/**
 * __useDeleteServiceMutation__
 *
 * To run a mutation, you first call `useDeleteServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteServiceMutation, { data, loading, error }] = useDeleteServiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteServiceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteServiceMutation, DeleteServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteServiceMutation, DeleteServiceMutationVariables>(DeleteServiceDocument, options);
      }
export type DeleteServiceMutationHookResult = ReturnType<typeof useDeleteServiceMutation>;
export type DeleteServiceMutationResult = Apollo.MutationResult<DeleteServiceMutation>;
export type DeleteServiceMutationOptions = Apollo.BaseMutationOptions<DeleteServiceMutation, DeleteServiceMutationVariables>;
export const CreateProductTypeDocument = gql`
    mutation CreateProductType($pt: ProductTypeInput) {
  createProductType(input: {data: $pt}) {
    productType {
      id
    }
  }
}
    `;
export type CreateProductTypeMutationFn = Apollo.MutationFunction<CreateProductTypeMutation, CreateProductTypeMutationVariables>;

/**
 * __useCreateProductTypeMutation__
 *
 * To run a mutation, you first call `useCreateProductTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductTypeMutation, { data, loading, error }] = useCreateProductTypeMutation({
 *   variables: {
 *      pt: // value for 'pt'
 *   },
 * });
 */
export function useCreateProductTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductTypeMutation, CreateProductTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductTypeMutation, CreateProductTypeMutationVariables>(CreateProductTypeDocument, options);
      }
export type CreateProductTypeMutationHookResult = ReturnType<typeof useCreateProductTypeMutation>;
export type CreateProductTypeMutationResult = Apollo.MutationResult<CreateProductTypeMutation>;
export type CreateProductTypeMutationOptions = Apollo.BaseMutationOptions<CreateProductTypeMutation, CreateProductTypeMutationVariables>;
export const UpdateProductTypeDocument = gql`
    mutation UpdateProductType($id: ID!, $productType: editProductTypeInput) {
  updateProductType(input: {data: $productType, where: {id: $id}}) {
    productType {
      id
    }
  }
}
    `;
export type UpdateProductTypeMutationFn = Apollo.MutationFunction<UpdateProductTypeMutation, UpdateProductTypeMutationVariables>;

/**
 * __useUpdateProductTypeMutation__
 *
 * To run a mutation, you first call `useUpdateProductTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductTypeMutation, { data, loading, error }] = useUpdateProductTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      productType: // value for 'productType'
 *   },
 * });
 */
export function useUpdateProductTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductTypeMutation, UpdateProductTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductTypeMutation, UpdateProductTypeMutationVariables>(UpdateProductTypeDocument, options);
      }
export type UpdateProductTypeMutationHookResult = ReturnType<typeof useUpdateProductTypeMutation>;
export type UpdateProductTypeMutationResult = Apollo.MutationResult<UpdateProductTypeMutation>;
export type UpdateProductTypeMutationOptions = Apollo.BaseMutationOptions<UpdateProductTypeMutation, UpdateProductTypeMutationVariables>;
export const DeleteProductTypeDocument = gql`
    mutation DeleteProductType($id: ID!) {
  deleteProductType(input: {where: {id: $id}}) {
    productType {
      id
      name
    }
  }
}
    `;
export type DeleteProductTypeMutationFn = Apollo.MutationFunction<DeleteProductTypeMutation, DeleteProductTypeMutationVariables>;

/**
 * __useDeleteProductTypeMutation__
 *
 * To run a mutation, you first call `useDeleteProductTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductTypeMutation, { data, loading, error }] = useDeleteProductTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductTypeMutation, DeleteProductTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductTypeMutation, DeleteProductTypeMutationVariables>(DeleteProductTypeDocument, options);
      }
export type DeleteProductTypeMutationHookResult = ReturnType<typeof useDeleteProductTypeMutation>;
export type DeleteProductTypeMutationResult = Apollo.MutationResult<DeleteProductTypeMutation>;
export type DeleteProductTypeMutationOptions = Apollo.BaseMutationOptions<DeleteProductTypeMutation, DeleteProductTypeMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($p: ProductInput) {
  createProduct(input: {data: $p}) {
    product {
      id
    }
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      p: // value for 'p'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($id: ID!, $product: editProductInput) {
  updateProduct(input: {data: $product, where: {id: $id}}) {
    product {
      id
    }
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      product: // value for 'product'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($id: ID!) {
  deleteProduct(input: {where: {id: $id}}) {
    product {
      id
      name
    }
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const AppLoginDocument = gql`
    mutation AppLogin($email: String!, $password: String!) {
  login(input: {identifier: $email, password: $password}) {
    jwt
  }
}
    `;
export type AppLoginMutationFn = Apollo.MutationFunction<AppLoginMutation, AppLoginMutationVariables>;

/**
 * __useAppLoginMutation__
 *
 * To run a mutation, you first call `useAppLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAppLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [appLoginMutation, { data, loading, error }] = useAppLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAppLoginMutation(baseOptions?: Apollo.MutationHookOptions<AppLoginMutation, AppLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AppLoginMutation, AppLoginMutationVariables>(AppLoginDocument, options);
      }
export type AppLoginMutationHookResult = ReturnType<typeof useAppLoginMutation>;
export type AppLoginMutationResult = Apollo.MutationResult<AppLoginMutation>;
export type AppLoginMutationOptions = Apollo.BaseMutationOptions<AppLoginMutation, AppLoginMutationVariables>;
export const CreateTeamDocument = gql`
    mutation CreateTeam($team: TeamInput) {
  createTeam(input: {data: $team}) {
    team {
      id
      name
      country
    }
  }
}
    `;
export type CreateTeamMutationFn = Apollo.MutationFunction<CreateTeamMutation, CreateTeamMutationVariables>;

/**
 * __useCreateTeamMutation__
 *
 * To run a mutation, you first call `useCreateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation({
 *   variables: {
 *      team: // value for 'team'
 *   },
 * });
 */
export function useCreateTeamMutation(baseOptions?: Apollo.MutationHookOptions<CreateTeamMutation, CreateTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTeamMutation, CreateTeamMutationVariables>(CreateTeamDocument, options);
      }
export type CreateTeamMutationHookResult = ReturnType<typeof useCreateTeamMutation>;
export type CreateTeamMutationResult = Apollo.MutationResult<CreateTeamMutation>;
export type CreateTeamMutationOptions = Apollo.BaseMutationOptions<CreateTeamMutation, CreateTeamMutationVariables>;
export const GetServicesDocument = gql`
    query GetServices {
  services {
    id
    name
    updatedAt
  }
}
    `;

/**
 * __useGetServicesQuery__
 *
 * To run a query within a React component, call `useGetServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetServicesQuery(baseOptions?: Apollo.QueryHookOptions<GetServicesQuery, GetServicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetServicesQuery, GetServicesQueryVariables>(GetServicesDocument, options);
      }
export function useGetServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetServicesQuery, GetServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetServicesQuery, GetServicesQueryVariables>(GetServicesDocument, options);
        }
export type GetServicesQueryHookResult = ReturnType<typeof useGetServicesQuery>;
export type GetServicesLazyQueryHookResult = ReturnType<typeof useGetServicesLazyQuery>;
export type GetServicesQueryResult = Apollo.QueryResult<GetServicesQuery, GetServicesQueryVariables>;
export const GetServiceDocument = gql`
    query GetService($id: ID!) {
  service(id: $id) {
    id
    name
    desc
    updatedAt
  }
}
    `;

/**
 * __useGetServiceQuery__
 *
 * To run a query within a React component, call `useGetServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetServiceQuery(baseOptions: Apollo.QueryHookOptions<GetServiceQuery, GetServiceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetServiceQuery, GetServiceQueryVariables>(GetServiceDocument, options);
      }
export function useGetServiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetServiceQuery, GetServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetServiceQuery, GetServiceQueryVariables>(GetServiceDocument, options);
        }
export type GetServiceQueryHookResult = ReturnType<typeof useGetServiceQuery>;
export type GetServiceLazyQueryHookResult = ReturnType<typeof useGetServiceLazyQuery>;
export type GetServiceQueryResult = Apollo.QueryResult<GetServiceQuery, GetServiceQueryVariables>;
export const SearchByNameDocument = gql`
    query SearchByName($name_contains: String!) {
  services(where: {name_contains: $name_contains}) {
    id
    name
    desc
    updatedAt
  }
}
    `;

/**
 * __useSearchByNameQuery__
 *
 * To run a query within a React component, call `useSearchByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchByNameQuery({
 *   variables: {
 *      name_contains: // value for 'name_contains'
 *   },
 * });
 */
export function useSearchByNameQuery(baseOptions: Apollo.QueryHookOptions<SearchByNameQuery, SearchByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchByNameQuery, SearchByNameQueryVariables>(SearchByNameDocument, options);
      }
export function useSearchByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchByNameQuery, SearchByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchByNameQuery, SearchByNameQueryVariables>(SearchByNameDocument, options);
        }
export type SearchByNameQueryHookResult = ReturnType<typeof useSearchByNameQuery>;
export type SearchByNameLazyQueryHookResult = ReturnType<typeof useSearchByNameLazyQuery>;
export type SearchByNameQueryResult = Apollo.QueryResult<SearchByNameQuery, SearchByNameQueryVariables>;
export const GetProductTypesDocument = gql`
    query GetProductTypes {
  productTypes {
    id
    name
    code
    updatedAt
  }
}
    `;

/**
 * __useGetProductTypesQuery__
 *
 * To run a query within a React component, call `useGetProductTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetProductTypesQuery, GetProductTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductTypesQuery, GetProductTypesQueryVariables>(GetProductTypesDocument, options);
      }
export function useGetProductTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductTypesQuery, GetProductTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductTypesQuery, GetProductTypesQueryVariables>(GetProductTypesDocument, options);
        }
export type GetProductTypesQueryHookResult = ReturnType<typeof useGetProductTypesQuery>;
export type GetProductTypesLazyQueryHookResult = ReturnType<typeof useGetProductTypesLazyQuery>;
export type GetProductTypesQueryResult = Apollo.QueryResult<GetProductTypesQuery, GetProductTypesQueryVariables>;
export const GetProductTypeDocument = gql`
    query GetProductType($id: ID!) {
  productType(id: $id) {
    id
    name
    code
    updatedAt
  }
}
    `;

/**
 * __useGetProductTypeQuery__
 *
 * To run a query within a React component, call `useGetProductTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductTypeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductTypeQuery(baseOptions: Apollo.QueryHookOptions<GetProductTypeQuery, GetProductTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductTypeQuery, GetProductTypeQueryVariables>(GetProductTypeDocument, options);
      }
export function useGetProductTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductTypeQuery, GetProductTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductTypeQuery, GetProductTypeQueryVariables>(GetProductTypeDocument, options);
        }
export type GetProductTypeQueryHookResult = ReturnType<typeof useGetProductTypeQuery>;
export type GetProductTypeLazyQueryHookResult = ReturnType<typeof useGetProductTypeLazyQuery>;
export type GetProductTypeQueryResult = Apollo.QueryResult<GetProductTypeQuery, GetProductTypeQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts {
  products {
    id
    code
    product_type {
      id
      name
    }
    name
    detail
    cost_price
    sale_price
    remark
    picture1
    picture2
    picture3
    picture1_delete_token
    picture2_delete_token
    picture3_delete_token
    updatedAt
  }
  productTypes {
    id
    name
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductsByTypeDocument = gql`
    query GetProductsByType($type: ID) {
  products(where: {product_type: {id: $type}}) {
    id
    code
    product_type {
      id
      name
    }
    name
    detail
    cost_price
    sale_price
    remark
    picture1
    picture2
    picture3
    picture1_delete_token
    picture2_delete_token
    picture3_delete_token
    updatedAt
  }
}
    `;

/**
 * __useGetProductsByTypeQuery__
 *
 * To run a query within a React component, call `useGetProductsByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsByTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsByTypeQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetProductsByTypeQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsByTypeQuery, GetProductsByTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsByTypeQuery, GetProductsByTypeQueryVariables>(GetProductsByTypeDocument, options);
      }
export function useGetProductsByTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsByTypeQuery, GetProductsByTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsByTypeQuery, GetProductsByTypeQueryVariables>(GetProductsByTypeDocument, options);
        }
export type GetProductsByTypeQueryHookResult = ReturnType<typeof useGetProductsByTypeQuery>;
export type GetProductsByTypeLazyQueryHookResult = ReturnType<typeof useGetProductsByTypeLazyQuery>;
export type GetProductsByTypeQueryResult = Apollo.QueryResult<GetProductsByTypeQuery, GetProductsByTypeQueryVariables>;
export const GetProductsByNameDocument = gql`
    query GetProductsByName($name: String) {
  products(where: {name_contains: $name}) {
    id
    code
    product_type {
      id
      name
    }
    name
    detail
    cost_price
    sale_price
    remark
    picture1
    picture2
    picture3
    picture1_delete_token
    picture2_delete_token
    picture3_delete_token
    updatedAt
  }
}
    `;

/**
 * __useGetProductsByNameQuery__
 *
 * To run a query within a React component, call `useGetProductsByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetProductsByNameQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsByNameQuery, GetProductsByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsByNameQuery, GetProductsByNameQueryVariables>(GetProductsByNameDocument, options);
      }
export function useGetProductsByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsByNameQuery, GetProductsByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsByNameQuery, GetProductsByNameQueryVariables>(GetProductsByNameDocument, options);
        }
export type GetProductsByNameQueryHookResult = ReturnType<typeof useGetProductsByNameQuery>;
export type GetProductsByNameLazyQueryHookResult = ReturnType<typeof useGetProductsByNameLazyQuery>;
export type GetProductsByNameQueryResult = Apollo.QueryResult<GetProductsByNameQuery, GetProductsByNameQueryVariables>;
export const GetProductsByTypeAndNameDocument = gql`
    query GetProductsByTypeAndName($type: ID, $name: String) {
  products(where: {product_type: {id: $type}, name_contains: $name}) {
    id
    code
    product_type {
      id
      name
    }
    name
    detail
    cost_price
    sale_price
    remark
    picture1
    picture2
    picture3
    picture1_delete_token
    picture2_delete_token
    picture3_delete_token
    updatedAt
  }
}
    `;

/**
 * __useGetProductsByTypeAndNameQuery__
 *
 * To run a query within a React component, call `useGetProductsByTypeAndNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsByTypeAndNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsByTypeAndNameQuery({
 *   variables: {
 *      type: // value for 'type'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetProductsByTypeAndNameQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsByTypeAndNameQuery, GetProductsByTypeAndNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsByTypeAndNameQuery, GetProductsByTypeAndNameQueryVariables>(GetProductsByTypeAndNameDocument, options);
      }
export function useGetProductsByTypeAndNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsByTypeAndNameQuery, GetProductsByTypeAndNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsByTypeAndNameQuery, GetProductsByTypeAndNameQueryVariables>(GetProductsByTypeAndNameDocument, options);
        }
export type GetProductsByTypeAndNameQueryHookResult = ReturnType<typeof useGetProductsByTypeAndNameQuery>;
export type GetProductsByTypeAndNameLazyQueryHookResult = ReturnType<typeof useGetProductsByTypeAndNameLazyQuery>;
export type GetProductsByTypeAndNameQueryResult = Apollo.QueryResult<GetProductsByTypeAndNameQuery, GetProductsByTypeAndNameQueryVariables>;
export const GetProductDocument = gql`
    query GetProduct($id: ID!) {
  product(id: $id) {
    id
    code
    product_type {
      id
      name
    }
    name
    detail
    cost_price
    sale_price
    remark
    picture1
    picture2
    picture3
    picture1_delete_token
    picture2_delete_token
    picture3_delete_token
    updatedAt
  }
  productTypes {
    id
    name
  }
}
    `;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
      }
export function useGetProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const GetTeamsDocument = gql`
    query GetTeams {
  teams {
    id
    name
    country
  }
}
    `;

/**
 * __useGetTeamsQuery__
 *
 * To run a query within a React component, call `useGetTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTeamsQuery(baseOptions?: Apollo.QueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
      }
export function useGetTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
        }
export type GetTeamsQueryHookResult = ReturnType<typeof useGetTeamsQuery>;
export type GetTeamsLazyQueryHookResult = ReturnType<typeof useGetTeamsLazyQuery>;
export type GetTeamsQueryResult = Apollo.QueryResult<GetTeamsQuery, GetTeamsQueryVariables>;
export const GetTodosDocument = gql`
    query GetTodos {
  todos {
    id
    title
    finished
  }
}
    `;

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
      }
export function useGetTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosQueryResult = Apollo.QueryResult<GetTodosQuery, GetTodosQueryVariables>;
export const GetAllDocument = gql`
    query GetAll {
  teams {
    id
    name
    country
  }
  todos {
    id
    title
    finished
  }
}
    `;

/**
 * __useGetAllQuery__
 *
 * To run a query within a React component, call `useGetAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllQuery(baseOptions?: Apollo.QueryHookOptions<GetAllQuery, GetAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllQuery, GetAllQueryVariables>(GetAllDocument, options);
      }
export function useGetAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllQuery, GetAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllQuery, GetAllQueryVariables>(GetAllDocument, options);
        }
export type GetAllQueryHookResult = ReturnType<typeof useGetAllQuery>;
export type GetAllLazyQueryHookResult = ReturnType<typeof useGetAllLazyQuery>;
export type GetAllQueryResult = Apollo.QueryResult<GetAllQuery, GetAllQueryVariables>;