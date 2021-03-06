import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
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

export type ApplicationQueryVariables = {
  id: Scalars['Int']
};


export type ApplicationQuery = (
  { __typename?: 'Query' }
  & { application: (
    { __typename?: 'Application' }
    & { containers: Array<(
      { __typename?: 'Container' }
      & Pick<Container, 'id' | 'size' | 'number'>
    )>, deployments: Array<(
      { __typename?: 'Deployment' }
      & Pick<Deployment, 'id' | 'image'>
    )> }
    & ApplicationFragmentFragment
  ) }
);

export type ApplicationFragmentFragment = (
  { __typename?: 'Application' }
  & Pick<Application, 'id' | 'name' | 'description' | 'createdAt' | 'updatedAt'>
  & { secrets: Array<(
    { __typename?: 'Secret' }
    & Pick<Secret, 'key' | 'value'>
  )>, createdBy: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);

export type ApplicationsQueryVariables = {};


export type ApplicationsQuery = (
  { __typename?: 'Query' }
  & { applications: Array<(
    { __typename?: 'Application' }
    & Pick<Application, 'id' | 'name' | 'description'>
  )> }
);

export type CreateApplicationMutationVariables = {
  name: Scalars['String']
};


export type CreateApplicationMutation = (
  { __typename?: 'Mutation' }
  & { createApplication: (
    { __typename?: 'Application' }
    & Pick<Application, 'id'>
  ) }
);

export type CreateContainerMutationVariables = {
  applicationID: Scalars['Int'],
  size: Scalars['Int'],
  number: Scalars['Int']
};


export type CreateContainerMutation = (
  { __typename?: 'Mutation' }
  & { application: (
    { __typename?: 'ApplicationMutations' }
    & { createContainer: (
      { __typename?: 'Container' }
      & Pick<Container, 'id' | 'size' | 'number'>
    ) }
  ) }
);

export type CreateDeploymentMutationVariables = {
  applicationID: Scalars['Int'],
  image: Scalars['String']
};


export type CreateDeploymentMutation = (
  { __typename?: 'Mutation' }
  & { application: (
    { __typename?: 'ApplicationMutations' }
    & { createDeployment: (
      { __typename?: 'Deployment' }
      & Pick<Deployment, 'id' | 'image'>
    ) }
  ) }
);

export type DisableTotpMutationVariables = {
  password: Scalars['String']
};


export type DisableTotpMutation = (
  { __typename?: 'Mutation' }
  & { disableTotp: (
    { __typename?: 'Result' }
    & Pick<Result, 'ok'>
  ) }
);

export type EnableTotpMutationVariables = {
  secret: Scalars['String'],
  token: Scalars['String']
};


export type EnableTotpMutation = (
  { __typename?: 'Mutation' }
  & { enableTotp: (
    { __typename?: 'Result' }
    & Pick<Result, 'ok'>
  ) }
);

export type ExchangeTotpMutationVariables = {
  token: Scalars['String']
};


export type ExchangeTotpMutation = (
  { __typename?: 'Mutation' }
  & { exchangeTOTP: (
    { __typename?: 'Result' }
    & Pick<Result, 'ok'>
  ) }
);

export type ForgotPasswordMutationVariables = {
  email: Scalars['String']
};


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & { forgotPassword: (
    { __typename?: 'Result' }
    & Pick<Result, 'ok'>
  ) }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & MeFragmentFragment
  ) }
);

export type MeFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'hasTOTP'>
  & { organization: Maybe<(
    { __typename?: 'Organization' }
    & Pick<Organization, 'id' | 'name'>
  )> }
);

export type OnboardTotpQueryVariables = {};


export type OnboardTotpQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
    & { onboardTOTP: Maybe<(
      { __typename?: 'TOTPOnboarding' }
      & Pick<TotpOnboarding, 'secret'>
    )> }
  ) }
);

export type ResetPasswordMutationVariables = {
  uuid: Scalars['String'],
  password?: Maybe<Scalars['String']>
};


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { resetPassword: (
    { __typename?: 'ResetPassword' }
    & Pick<ResetPassword, 'complete'>
  ) }
);

export type SignInMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn: (
    { __typename?: 'SignInResult' }
    & Pick<SignInResult, 'ok' | 'requiresTOTP'>
  ) }
);

export type SignUpMutationVariables = {
  orgName: Scalars['String'],
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp: (
    { __typename?: 'Result' }
    & Pick<Result, 'ok'>
  ) }
);

export type UpdateAccountMutationVariables = {
  name: Scalars['String'],
  email: Scalars['String']
};


export type UpdateAccountMutation = (
  { __typename?: 'Mutation' }
  & { updateAccount: (
    { __typename?: 'User' }
    & MeFragmentFragment
  ) }
);

export type UpdateApplicationMutationVariables = {
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  secret?: Maybe<SecretInput>
};


export type UpdateApplicationMutation = (
  { __typename?: 'Mutation' }
  & { application: (
    { __typename?: 'ApplicationMutations' }
    & { update: (
      { __typename?: 'Application' }
      & ApplicationFragmentFragment
    ) }
  ) }
);

export type UpdateContainerMutationVariables = {
  applicationID: Scalars['Int'],
  id: Scalars['Int'],
  number: Scalars['Int']
};


export type UpdateContainerMutation = (
  { __typename?: 'Mutation' }
  & { application: (
    { __typename?: 'ApplicationMutations' }
    & { updateContainer: (
      { __typename?: 'Container' }
      & Pick<Container, 'id' | 'size' | 'number'>
    ) }
  ) }
);

export const ApplicationFragmentFragmentDoc = gql`
    fragment ApplicationFragment on Application {
  id
  name
  description
  secrets {
    key
    value
  }
  createdBy {
    id
    name
  }
  createdAt
  updatedAt
}
    `;
export const MeFragmentFragmentDoc = gql`
    fragment MeFragment on User {
  id
  name
  email
  hasTOTP
  organization {
    id
    name
  }
}
    `;
export const ApplicationDocument = gql`
    query Application($id: Int!) {
  application(id: $id) {
    ...ApplicationFragment
    containers {
      id
      size
      number
    }
    deployments {
      id
      image
    }
  }
}
    ${ApplicationFragmentFragmentDoc}`;

/**
 * __useApplicationQuery__
 *
 * To run a query within a React component, call `useApplicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplicationQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplicationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useApplicationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ApplicationQuery, ApplicationQueryVariables>) {
        return ApolloReactHooks.useQuery<ApplicationQuery, ApplicationQueryVariables>(ApplicationDocument, baseOptions);
      }
export function useApplicationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ApplicationQuery, ApplicationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ApplicationQuery, ApplicationQueryVariables>(ApplicationDocument, baseOptions);
        }
export type ApplicationQueryHookResult = ReturnType<typeof useApplicationQuery>;
export type ApplicationLazyQueryHookResult = ReturnType<typeof useApplicationLazyQuery>;
export type ApplicationQueryResult = ApolloReactCommon.QueryResult<ApplicationQuery, ApplicationQueryVariables>;
export const ApplicationsDocument = gql`
    query Applications {
  applications {
    id
    name
    description
  }
}
    `;

/**
 * __useApplicationsQuery__
 *
 * To run a query within a React component, call `useApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplicationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useApplicationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ApplicationsQuery, ApplicationsQueryVariables>) {
        return ApolloReactHooks.useQuery<ApplicationsQuery, ApplicationsQueryVariables>(ApplicationsDocument, baseOptions);
      }
export function useApplicationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ApplicationsQuery, ApplicationsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ApplicationsQuery, ApplicationsQueryVariables>(ApplicationsDocument, baseOptions);
        }
export type ApplicationsQueryHookResult = ReturnType<typeof useApplicationsQuery>;
export type ApplicationsLazyQueryHookResult = ReturnType<typeof useApplicationsLazyQuery>;
export type ApplicationsQueryResult = ApolloReactCommon.QueryResult<ApplicationsQuery, ApplicationsQueryVariables>;
export const CreateApplicationDocument = gql`
    mutation CreateApplication($name: String!) {
  createApplication(name: $name) {
    id
  }
}
    `;
export type CreateApplicationMutationFn = ApolloReactCommon.MutationFunction<CreateApplicationMutation, CreateApplicationMutationVariables>;

/**
 * __useCreateApplicationMutation__
 *
 * To run a mutation, you first call `useCreateApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createApplicationMutation, { data, loading, error }] = useCreateApplicationMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateApplicationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateApplicationMutation, CreateApplicationMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateApplicationMutation, CreateApplicationMutationVariables>(CreateApplicationDocument, baseOptions);
      }
export type CreateApplicationMutationHookResult = ReturnType<typeof useCreateApplicationMutation>;
export type CreateApplicationMutationResult = ApolloReactCommon.MutationResult<CreateApplicationMutation>;
export type CreateApplicationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateApplicationMutation, CreateApplicationMutationVariables>;
export const CreateContainerDocument = gql`
    mutation CreateContainer($applicationID: Int!, $size: Int!, $number: Int!) {
  application(id: $applicationID) {
    createContainer(size: $size, number: $number) {
      id
      size
      number
    }
  }
}
    `;
export type CreateContainerMutationFn = ApolloReactCommon.MutationFunction<CreateContainerMutation, CreateContainerMutationVariables>;

/**
 * __useCreateContainerMutation__
 *
 * To run a mutation, you first call `useCreateContainerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContainerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContainerMutation, { data, loading, error }] = useCreateContainerMutation({
 *   variables: {
 *      applicationID: // value for 'applicationID'
 *      size: // value for 'size'
 *      number: // value for 'number'
 *   },
 * });
 */
export function useCreateContainerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateContainerMutation, CreateContainerMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateContainerMutation, CreateContainerMutationVariables>(CreateContainerDocument, baseOptions);
      }
export type CreateContainerMutationHookResult = ReturnType<typeof useCreateContainerMutation>;
export type CreateContainerMutationResult = ApolloReactCommon.MutationResult<CreateContainerMutation>;
export type CreateContainerMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateContainerMutation, CreateContainerMutationVariables>;
export const CreateDeploymentDocument = gql`
    mutation CreateDeployment($applicationID: Int!, $image: String!) {
  application(id: $applicationID) {
    createDeployment(image: $image) {
      id
      image
    }
  }
}
    `;
export type CreateDeploymentMutationFn = ApolloReactCommon.MutationFunction<CreateDeploymentMutation, CreateDeploymentMutationVariables>;

/**
 * __useCreateDeploymentMutation__
 *
 * To run a mutation, you first call `useCreateDeploymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDeploymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDeploymentMutation, { data, loading, error }] = useCreateDeploymentMutation({
 *   variables: {
 *      applicationID: // value for 'applicationID'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateDeploymentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateDeploymentMutation, CreateDeploymentMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateDeploymentMutation, CreateDeploymentMutationVariables>(CreateDeploymentDocument, baseOptions);
      }
export type CreateDeploymentMutationHookResult = ReturnType<typeof useCreateDeploymentMutation>;
export type CreateDeploymentMutationResult = ApolloReactCommon.MutationResult<CreateDeploymentMutation>;
export type CreateDeploymentMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateDeploymentMutation, CreateDeploymentMutationVariables>;
export const DisableTotpDocument = gql`
    mutation DisableTOTP($password: String!) {
  disableTotp(password: $password) {
    ok
  }
}
    `;
export type DisableTotpMutationFn = ApolloReactCommon.MutationFunction<DisableTotpMutation, DisableTotpMutationVariables>;

/**
 * __useDisableTotpMutation__
 *
 * To run a mutation, you first call `useDisableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableTotpMutation, { data, loading, error }] = useDisableTotpMutation({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export function useDisableTotpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DisableTotpMutation, DisableTotpMutationVariables>) {
        return ApolloReactHooks.useMutation<DisableTotpMutation, DisableTotpMutationVariables>(DisableTotpDocument, baseOptions);
      }
export type DisableTotpMutationHookResult = ReturnType<typeof useDisableTotpMutation>;
export type DisableTotpMutationResult = ApolloReactCommon.MutationResult<DisableTotpMutation>;
export type DisableTotpMutationOptions = ApolloReactCommon.BaseMutationOptions<DisableTotpMutation, DisableTotpMutationVariables>;
export const EnableTotpDocument = gql`
    mutation EnableTotp($secret: String!, $token: String!) {
  enableTotp(secret: $secret, token: $token) {
    ok
  }
}
    `;
export type EnableTotpMutationFn = ApolloReactCommon.MutationFunction<EnableTotpMutation, EnableTotpMutationVariables>;

/**
 * __useEnableTotpMutation__
 *
 * To run a mutation, you first call `useEnableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableTotpMutation, { data, loading, error }] = useEnableTotpMutation({
 *   variables: {
 *      secret: // value for 'secret'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useEnableTotpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EnableTotpMutation, EnableTotpMutationVariables>) {
        return ApolloReactHooks.useMutation<EnableTotpMutation, EnableTotpMutationVariables>(EnableTotpDocument, baseOptions);
      }
export type EnableTotpMutationHookResult = ReturnType<typeof useEnableTotpMutation>;
export type EnableTotpMutationResult = ApolloReactCommon.MutationResult<EnableTotpMutation>;
export type EnableTotpMutationOptions = ApolloReactCommon.BaseMutationOptions<EnableTotpMutation, EnableTotpMutationVariables>;
export const ExchangeTotpDocument = gql`
    mutation ExchangeTOTP($token: String!) {
  exchangeTOTP(token: $token) {
    ok
  }
}
    `;
export type ExchangeTotpMutationFn = ApolloReactCommon.MutationFunction<ExchangeTotpMutation, ExchangeTotpMutationVariables>;

/**
 * __useExchangeTotpMutation__
 *
 * To run a mutation, you first call `useExchangeTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExchangeTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exchangeTotpMutation, { data, loading, error }] = useExchangeTotpMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useExchangeTotpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ExchangeTotpMutation, ExchangeTotpMutationVariables>) {
        return ApolloReactHooks.useMutation<ExchangeTotpMutation, ExchangeTotpMutationVariables>(ExchangeTotpDocument, baseOptions);
      }
export type ExchangeTotpMutationHookResult = ReturnType<typeof useExchangeTotpMutation>;
export type ExchangeTotpMutationResult = ApolloReactCommon.MutationResult<ExchangeTotpMutation>;
export type ExchangeTotpMutationOptions = ApolloReactCommon.BaseMutationOptions<ExchangeTotpMutation, ExchangeTotpMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email) {
    ok
  }
}
    `;
export type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...MeFragment
  }
}
    ${MeFragmentFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const OnboardTotpDocument = gql`
    query OnboardTOTP {
  me {
    id
    name
    onboardTOTP {
      secret
    }
  }
}
    `;

/**
 * __useOnboardTotpQuery__
 *
 * To run a query within a React component, call `useOnboardTotpQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnboardTotpQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnboardTotpQuery({
 *   variables: {
 *   },
 * });
 */
export function useOnboardTotpQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OnboardTotpQuery, OnboardTotpQueryVariables>) {
        return ApolloReactHooks.useQuery<OnboardTotpQuery, OnboardTotpQueryVariables>(OnboardTotpDocument, baseOptions);
      }
export function useOnboardTotpLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OnboardTotpQuery, OnboardTotpQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OnboardTotpQuery, OnboardTotpQueryVariables>(OnboardTotpDocument, baseOptions);
        }
export type OnboardTotpQueryHookResult = ReturnType<typeof useOnboardTotpQuery>;
export type OnboardTotpLazyQueryHookResult = ReturnType<typeof useOnboardTotpLazyQuery>;
export type OnboardTotpQueryResult = ApolloReactCommon.QueryResult<OnboardTotpQuery, OnboardTotpQueryVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($uuid: String!, $password: String) {
  resetPassword(uuid: $uuid, password: $password) {
    complete
  }
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      uuid: // value for 'uuid'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    ok
    requiresTOTP
  }
}
    `;
export type SignInMutationFn = ApolloReactCommon.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return ApolloReactHooks.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = ApolloReactCommon.MutationResult<SignInMutation>;
export type SignInMutationOptions = ApolloReactCommon.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($orgName: String!, $name: String!, $email: String!, $password: String!) {
  signUp(organizationName: $orgName, name: $name, email: $email, password: $password) {
    ok
  }
}
    `;
export type SignUpMutationFn = ApolloReactCommon.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      orgName: // value for 'orgName'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = ApolloReactCommon.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UpdateAccountDocument = gql`
    mutation UpdateAccount($name: String!, $email: String!) {
  updateAccount(name: $name, email: $email) {
    ...MeFragment
  }
}
    ${MeFragmentFragmentDoc}`;
export type UpdateAccountMutationFn = ApolloReactCommon.MutationFunction<UpdateAccountMutation, UpdateAccountMutationVariables>;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAccountMutation, UpdateAccountMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAccountMutation, UpdateAccountMutationVariables>(UpdateAccountDocument, baseOptions);
      }
export type UpdateAccountMutationHookResult = ReturnType<typeof useUpdateAccountMutation>;
export type UpdateAccountMutationResult = ApolloReactCommon.MutationResult<UpdateAccountMutation>;
export type UpdateAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const UpdateApplicationDocument = gql`
    mutation UpdateApplication($id: Int!, $name: String, $description: String, $secret: SecretInput) {
  application(id: $id) {
    update(name: $name, description: $description, secret: $secret) {
      ...ApplicationFragment
    }
  }
}
    ${ApplicationFragmentFragmentDoc}`;
export type UpdateApplicationMutationFn = ApolloReactCommon.MutationFunction<UpdateApplicationMutation, UpdateApplicationMutationVariables>;

/**
 * __useUpdateApplicationMutation__
 *
 * To run a mutation, you first call `useUpdateApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateApplicationMutation, { data, loading, error }] = useUpdateApplicationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      secret: // value for 'secret'
 *   },
 * });
 */
export function useUpdateApplicationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateApplicationMutation, UpdateApplicationMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateApplicationMutation, UpdateApplicationMutationVariables>(UpdateApplicationDocument, baseOptions);
      }
export type UpdateApplicationMutationHookResult = ReturnType<typeof useUpdateApplicationMutation>;
export type UpdateApplicationMutationResult = ApolloReactCommon.MutationResult<UpdateApplicationMutation>;
export type UpdateApplicationMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateApplicationMutation, UpdateApplicationMutationVariables>;
export const UpdateContainerDocument = gql`
    mutation UpdateContainer($applicationID: Int!, $id: Int!, $number: Int!) {
  application(id: $applicationID) {
    updateContainer(id: $id, number: $number) {
      id
      size
      number
    }
  }
}
    `;
export type UpdateContainerMutationFn = ApolloReactCommon.MutationFunction<UpdateContainerMutation, UpdateContainerMutationVariables>;

/**
 * __useUpdateContainerMutation__
 *
 * To run a mutation, you first call `useUpdateContainerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContainerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContainerMutation, { data, loading, error }] = useUpdateContainerMutation({
 *   variables: {
 *      applicationID: // value for 'applicationID'
 *      id: // value for 'id'
 *      number: // value for 'number'
 *   },
 * });
 */
export function useUpdateContainerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateContainerMutation, UpdateContainerMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateContainerMutation, UpdateContainerMutationVariables>(UpdateContainerDocument, baseOptions);
      }
export type UpdateContainerMutationHookResult = ReturnType<typeof useUpdateContainerMutation>;
export type UpdateContainerMutationResult = ApolloReactCommon.MutationResult<UpdateContainerMutation>;
export type UpdateContainerMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateContainerMutation, UpdateContainerMutationVariables>;