import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};


export type Application = {
   __typename?: 'Application',
  id: Scalars['Int'],
  name: Scalars['String'],
  description: Scalars['String'],
  secrets: Array<Secret>,
  containers: Array<Container>,
  deployments: Array<Deployment>,
  createdBy?: Maybe<User>,
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type ApplicationMutations = {
   __typename?: 'ApplicationMutations',
  update: Application,
  createDeployment: Deployment,
  updateDeployment: Deployment,
  createContainer: Container,
  updateContainer: Container,
};


export type ApplicationMutationsUpdateArgs = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  secret?: Maybe<SecretInput>
};


export type ApplicationMutationsCreateDeploymentArgs = {
  image: Scalars['String']
};


export type ApplicationMutationsUpdateDeploymentArgs = {
  id: Scalars['Int'],
  image: Scalars['String']
};


export type ApplicationMutationsCreateContainerArgs = {
  size: Scalars['Int'],
  number: Scalars['Int']
};


export type ApplicationMutationsUpdateContainerArgs = {
  id: Scalars['Int'],
  number: Scalars['Int']
};

export type Container = {
   __typename?: 'Container',
  id: Scalars['Int'],
  size: Scalars['Int'],
  number: Scalars['Int'],
  /** TODO: Make this non-nullable once this link is enforced: */
  deployment?: Maybe<Deployment>,
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type Deployment = {
   __typename?: 'Deployment',
  id: Scalars['Int'],
  image: Scalars['String'],
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  /** ACCOUNT MANAGEMENT: */
  signUp: Result,
  signIn: SignInResult,
  exchangeTOTP: Result,
  enableTotp: Result,
  disableTotp: Result,
  updateAccount: User,
  forgotPassword: Result,
  resetPassword: ResetPassword,
  /** APPLICATIONS: */
  createApplication: Application,
  application: ApplicationMutations,
};


export type MutationSignUpArgs = {
  organizationName: Scalars['String'],
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationSignInArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationExchangeTotpArgs = {
  token: Scalars['String']
};


export type MutationEnableTotpArgs = {
  secret: Scalars['String'],
  token: Scalars['String']
};


export type MutationDisableTotpArgs = {
  password: Scalars['String']
};


export type MutationUpdateAccountArgs = {
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']
};


export type MutationResetPasswordArgs = {
  uuid: Scalars['String'],
  password?: Maybe<Scalars['String']>
};


export type MutationCreateApplicationArgs = {
  name: Scalars['String']
};


export type MutationApplicationArgs = {
  id: Scalars['Int']
};

export type Organization = {
   __typename?: 'Organization',
  id: Scalars['Int'],
  name: Scalars['String'],
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor: Scalars['String'],
  endCursor: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  me: User,
  applications: Array<Application>,
  application: Application,
};


export type QueryApplicationArgs = {
  id: Scalars['Int']
};

export type ResetPassword = {
   __typename?: 'ResetPassword',
  complete: Scalars['Boolean'],
};

export type Result = {
   __typename?: 'Result',
  ok: Scalars['Boolean'],
};

export type Secret = {
   __typename?: 'Secret',
  key: Scalars['String'],
  value: Scalars['String'],
};

export type SecretInput = {
  key: Scalars['String'],
  value: Scalars['String'],
};

export type SignInResult = {
   __typename?: 'SignInResult',
  ok: Scalars['Boolean'],
  requiresTOTP: Scalars['Boolean'],
};

export type TotpOnboarding = {
   __typename?: 'TOTPOnboarding',
  secret: Scalars['String'],
};

/** TODO: Users probably have roles. */
export type User = {
   __typename?: 'User',
  id: Scalars['Int'],
  name: Scalars['String'],
  email: Scalars['String'],
  hasTOTP: Scalars['Boolean'],
  onboardTOTP?: Maybe<TotpOnboarding>,
  organization?: Maybe<Organization>,
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  User: ResolverTypeWrapper<(Partial<User> & Record<string, any>)>,
  Int: ResolverTypeWrapper<(Partial<Scalars['Int']> & Record<string, any>)>,
  String: ResolverTypeWrapper<(Partial<Scalars['String']> & Record<string, any>)>,
  Boolean: ResolverTypeWrapper<(Partial<Scalars['Boolean']> & Record<string, any>)>,
  TOTPOnboarding: ResolverTypeWrapper<(Partial<TotpOnboarding> & Record<string, any>)>,
  Organization: ResolverTypeWrapper<(Partial<Organization> & Record<string, any>)>,
  Application: ResolverTypeWrapper<(Partial<Application> & Record<string, any>)>,
  Secret: ResolverTypeWrapper<(Partial<Secret> & Record<string, any>)>,
  Container: ResolverTypeWrapper<(Partial<Container> & Record<string, any>)>,
  Deployment: ResolverTypeWrapper<(Partial<Deployment> & Record<string, any>)>,
  Mutation: ResolverTypeWrapper<{}>,
  Result: ResolverTypeWrapper<(Partial<Result> & Record<string, any>)>,
  SignInResult: ResolverTypeWrapper<(Partial<SignInResult> & Record<string, any>)>,
  ResetPassword: ResolverTypeWrapper<(Partial<ResetPassword> & Record<string, any>)>,
  ApplicationMutations: ResolverTypeWrapper<(Partial<ApplicationMutations> & Record<string, any>)>,
  SecretInput: ResolverTypeWrapper<(Partial<SecretInput> & Record<string, any>)>,
  PageInfo: ResolverTypeWrapper<(Partial<PageInfo> & Record<string, any>)>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  User: (Partial<User> & Record<string, any>),
  Int: (Partial<Scalars['Int']> & Record<string, any>),
  String: (Partial<Scalars['String']> & Record<string, any>),
  Boolean: (Partial<Scalars['Boolean']> & Record<string, any>),
  TOTPOnboarding: (Partial<TotpOnboarding> & Record<string, any>),
  Organization: (Partial<Organization> & Record<string, any>),
  Application: (Partial<Application> & Record<string, any>),
  Secret: (Partial<Secret> & Record<string, any>),
  Container: (Partial<Container> & Record<string, any>),
  Deployment: (Partial<Deployment> & Record<string, any>),
  Mutation: {},
  Result: (Partial<Result> & Record<string, any>),
  SignInResult: (Partial<SignInResult> & Record<string, any>),
  ResetPassword: (Partial<ResetPassword> & Record<string, any>),
  ApplicationMutations: (Partial<ApplicationMutations> & Record<string, any>),
  SecretInput: (Partial<SecretInput> & Record<string, any>),
  PageInfo: (Partial<PageInfo> & Record<string, any>),
}>;

export type AuthDirectiveResolver<Result, Parent, ContextType = any, Args = {  }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Application'] = ResolversParentTypes['Application']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  secrets?: Resolver<Array<ResolversTypes['Secret']>, ParentType, ContextType>,
  containers?: Resolver<Array<ResolversTypes['Container']>, ParentType, ContextType>,
  deployments?: Resolver<Array<ResolversTypes['Deployment']>, ParentType, ContextType>,
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type ApplicationMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationMutations'] = ResolversParentTypes['ApplicationMutations']> = ResolversObject<{
  update?: Resolver<ResolversTypes['Application'], ParentType, ContextType, ApplicationMutationsUpdateArgs>,
  createDeployment?: Resolver<ResolversTypes['Deployment'], ParentType, ContextType, RequireFields<ApplicationMutationsCreateDeploymentArgs, 'image'>>,
  updateDeployment?: Resolver<ResolversTypes['Deployment'], ParentType, ContextType, RequireFields<ApplicationMutationsUpdateDeploymentArgs, 'id' | 'image'>>,
  createContainer?: Resolver<ResolversTypes['Container'], ParentType, ContextType, RequireFields<ApplicationMutationsCreateContainerArgs, 'size' | 'number'>>,
  updateContainer?: Resolver<ResolversTypes['Container'], ParentType, ContextType, RequireFields<ApplicationMutationsUpdateContainerArgs, 'id' | 'number'>>,
}>;

export type ContainerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Container'] = ResolversParentTypes['Container']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  deployment?: Resolver<Maybe<ResolversTypes['Deployment']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type DeploymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Deployment'] = ResolversParentTypes['Deployment']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  signUp?: Resolver<ResolversTypes['Result'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'organizationName' | 'name' | 'email' | 'password'>>,
  signIn?: Resolver<ResolversTypes['SignInResult'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'email' | 'password'>>,
  exchangeTOTP?: Resolver<ResolversTypes['Result'], ParentType, ContextType, RequireFields<MutationExchangeTotpArgs, 'token'>>,
  enableTotp?: Resolver<ResolversTypes['Result'], ParentType, ContextType, RequireFields<MutationEnableTotpArgs, 'secret' | 'token'>>,
  disableTotp?: Resolver<ResolversTypes['Result'], ParentType, ContextType, RequireFields<MutationDisableTotpArgs, 'password'>>,
  updateAccount?: Resolver<ResolversTypes['User'], ParentType, ContextType, MutationUpdateAccountArgs>,
  forgotPassword?: Resolver<ResolversTypes['Result'], ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>,
  resetPassword?: Resolver<ResolversTypes['ResetPassword'], ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'uuid'>>,
  createApplication?: Resolver<ResolversTypes['Application'], ParentType, ContextType, RequireFields<MutationCreateApplicationArgs, 'name'>>,
  application?: Resolver<ResolversTypes['ApplicationMutations'], ParentType, ContextType, RequireFields<MutationApplicationArgs, 'id'>>,
}>;

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  startCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  endCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  applications?: Resolver<Array<ResolversTypes['Application']>, ParentType, ContextType>,
  application?: Resolver<ResolversTypes['Application'], ParentType, ContextType, RequireFields<QueryApplicationArgs, 'id'>>,
}>;

export type ResetPasswordResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResetPassword'] = ResolversParentTypes['ResetPassword']> = ResolversObject<{
  complete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
}>;

export type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = ResolversObject<{
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
}>;

export type SecretResolvers<ContextType = any, ParentType extends ResolversParentTypes['Secret'] = ResolversParentTypes['Secret']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type SignInResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignInResult'] = ResolversParentTypes['SignInResult']> = ResolversObject<{
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  requiresTOTP?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
}>;

export type TotpOnboardingResolvers<ContextType = any, ParentType extends ResolversParentTypes['TOTPOnboarding'] = ResolversParentTypes['TOTPOnboarding']> = ResolversObject<{
  secret?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  hasTOTP?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  onboardTOTP?: Resolver<Maybe<ResolversTypes['TOTPOnboarding']>, ParentType, ContextType>,
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>,
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Application?: ApplicationResolvers<ContextType>,
  ApplicationMutations?: ApplicationMutationsResolvers<ContextType>,
  Container?: ContainerResolvers<ContextType>,
  Deployment?: DeploymentResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Organization?: OrganizationResolvers<ContextType>,
  PageInfo?: PageInfoResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  ResetPassword?: ResetPasswordResolvers<ContextType>,
  Result?: ResultResolvers<ContextType>,
  Secret?: SecretResolvers<ContextType>,
  SignInResult?: SignInResultResolvers<ContextType>,
  TOTPOnboarding?: TotpOnboardingResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  auth?: AuthDirectiveResolver<any, any, ContextType>,
}>;


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;