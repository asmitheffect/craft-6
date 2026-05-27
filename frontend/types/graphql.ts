/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: unknown; output: unknown; }
  QueryArgument: { input: unknown; output: unknown; }
};

export type Address = AddressInterface & ElementInterface & {
  __typename?: 'Address';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** First line of the address */
  addressLine1?: Maybe<Scalars['String']['output']>;
  /** Second line of the address */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** Third line of the address */
  addressLine3?: Maybe<Scalars['String']['output']>;
  /** Administrative area. */
  administrativeArea?: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Two-letter country code */
  countryCode: Scalars['String']['output'];
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Dependent locality */
  dependentLocality?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The first name on the address. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The full name on the address. */
  fullName?: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The last name on the address. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  latitude?: Maybe<Scalars['String']['output']>;
  /** Locality */
  locality?: Maybe<Scalars['String']['output']>;
  /** Longitude */
  longitude?: Maybe<Scalars['String']['output']>;
  /** Organization name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Organization tax ID */
  organizationTaxId?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Sorting code */
  sortingCode?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type Address_CountArgs = {
  field: Scalars['String']['input'];
};

/** This is the interface implemented by all addresses. */
export type AddressInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** First line of the address */
  addressLine1?: Maybe<Scalars['String']['output']>;
  /** Second line of the address */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** Third line of the address */
  addressLine3?: Maybe<Scalars['String']['output']>;
  /** Administrative area. */
  administrativeArea?: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** Two-letter country code */
  countryCode: Scalars['String']['output'];
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Dependent locality */
  dependentLocality?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The first name on the address. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The full name on the address. */
  fullName?: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The last name on the address. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Latitude */
  latitude?: Maybe<Scalars['String']['output']>;
  /** Locality */
  locality?: Maybe<Scalars['String']['output']>;
  /** Longitude */
  longitude?: Maybe<Scalars['String']['output']>;
  /** Organization name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Organization tax ID */
  organizationTaxId?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Sorting code */
  sortingCode?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all addresses. */
export type AddressInterface_CountArgs = {
  field: Scalars['String']['input'];
};

/** This is the interface implemented by all assets. */
export type AssetInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The file extension for the asset file. */
  extension: Scalars['String']['output'];
  /** The filename of the asset file. */
  filename: Scalars['String']['output'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int']['output'];
  /** Returns the file’s format. */
  format?: Maybe<Scalars['String']['output']>;
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean']['output'];
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']['output']>;
  /** The file kind. */
  kind: Scalars['String']['output'];
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String']['output'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The user who first added this asset (if known). */
  uploader?: Maybe<UserInterface>;
  /** The ID of the user who first added this asset (if known). */
  uploaderId?: Maybe<Scalars['Int']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']['output']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']['output']>;
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars['Int']['output']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceFormatArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceHeightArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceNextArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfacePrevArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceSrcsetArgs = {
  sizes: Array<Scalars['String']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceUploaderArgs = {
  affiliatedSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  affiliatedSiteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']['input']>;
  authors?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceUrlArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceWidthArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetRelationCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the assets’ files’ last-modified dates. */
  dateModified?: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the assets’ filenames. */
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on whether the assets have alternative text. */
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the assets’ image heights. */
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the assets’ file kinds. */
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to elements that do not relate to the provided element IDs. */
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  /** Narrows the relations based on the field they were created in. */
  relatedViaField?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the relations based on the site they were created in. */
  relatedViaSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Defines the default options that should be applied terms within the `search` argument. */
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the assets’ file sizes (in bytes). */
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the assets’ image widths. */
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of transform handles to preload. */
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Element = ElementInterface & {
  __typename?: 'Element';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


export type Element_CountArgs = {
  field: Scalars['String']['input'];
};

/** This is the interface implemented by all elements. */
export type ElementInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all elements. */
export type ElementInterface_CountArgs = {
  field: Scalars['String']['input'];
};

/** This is the interface implemented by all entries. */
export type EntryInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The primary entry author. */
  author?: Maybe<UserInterface>;
  /** The primary entry author’s ID. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** The entry authors’ IDs. */
  authorIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** The entry authors. */
  authors?: Maybe<Array<Maybe<UserInterface>>>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfacePrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EntryRelationCriteriaInput = {
  /** Narrows the query results to only entries that were posted on or after a certain date. */
  after?: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that have been archived. */
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the user group the entries’ authors belong to. */
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the entries’ authors. */
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only entries that were posted before a certain date. */
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  /** The drafts’ creator ID */
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the draft to return (from the `drafts` table) */
  draftId?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only drafts of a given element.  Set to `false` to fetch unpublished drafts. */
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  /** Whether draft elements should be returned. */
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to only return entries that the user has permission to edit. */
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the entries’ expiry dates. */
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the field the entries are contained by. */
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the field the entries are contained by, per the fields’ IDs. */
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to elements that do not relate to the provided element IDs. */
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results based on the owner element of the entries, per the owners’ IDs. */
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the entries’ post dates. */
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the primary owner element of the entries, per the owners’ IDs. */
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Whether provisional drafts should be returned. */
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  /** Narrows the relations based on the field they were created in. */
  relatedViaField?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the relations based on the site they were created in. */
  relatedViaSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The revisions’ creator ID */
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the revision to return (from the `revisions` table) */
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  /** The source element ID that revisions should be returned for */
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  /** Whether revision elements should be returned. */
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Defines the default options that should be applied terms within the `search` argument. */
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  /** Narrows the query results based on the section handles the entries belong to. */
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the entries’ entry type handles. */
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Whether canonical elements should be replaced with provisional drafts if those exist. */
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkData = {
  __typename?: 'LinkData';
  ariaLabel?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<AssetInterface>;
  class?: Maybe<Scalars['String']['output']>;
  defaultLabel?: Maybe<Scalars['String']['output']>;
  download?: Maybe<Scalars['Boolean']['output']>;
  element?: Maybe<ElementInterface>;
  elementId?: Maybe<Scalars['Int']['output']>;
  elementSiteId?: Maybe<Scalars['Int']['output']>;
  elementTitle?: Maybe<Scalars['String']['output']>;
  elementType?: Maybe<Scalars['String']['output']>;
  entry?: Maybe<EntryInterface>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  rel?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  urlSuffix?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ping?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** This query is used to query for a single address. */
  address?: Maybe<AddressInterface>;
  /** This query is used to return the number of addresses. */
  addressCount: Scalars['Int']['output'];
  /** This query is used to query for addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** This query is used to query for a single asset. */
  asset?: Maybe<AssetInterface>;
  /** This query is used to return the number of assets. */
  assetCount: Scalars['Int']['output'];
  /** This query is used to query for assets. */
  assets?: Maybe<Array<Maybe<AssetInterface>>>;
  /** Entries within the “Button Group” Matrix field. */
  buttonGroupFieldEntries?: Maybe<Array<Maybe<ButtonGroupFieldEntryUnion>>>;
  /** Entries within the “Dynamic Section” Matrix field. */
  dynamicSectionFieldEntries?: Maybe<Array<Maybe<DynamicSectionFieldEntryUnion>>>;
  /** This query is used to query for entries. */
  entries?: Maybe<Array<Maybe<EntryInterface>>>;
  /** This query is used to query for a single entry. */
  entry?: Maybe<EntryInterface>;
  /** This query is used to return the number of entries. */
  entryCount: Scalars['Int']['output'];
  /** Entries within the “Home Page” section. */
  homePageEntries?: Maybe<Array<Maybe<HomePageSectionEntryUnion>>>;
  /** Single entry within the “Home Page” section. */
  homePageEntry?: Maybe<HomePageSectionEntryUnion>;
  /** Entries within the “Navigation” section. */
  navigationEntries?: Maybe<Array<Maybe<NavigationSectionEntryUnion>>>;
  /** Entries within the “News Categories” section. */
  newsCategoriesEntries?: Maybe<Array<Maybe<NewsCategoriesSectionEntryUnion>>>;
  /** Entries within the “News” section. */
  newsEntries?: Maybe<Array<Maybe<NewsSectionEntryUnion>>>;
  /** Entries within the “Pages” section. */
  pagesEntries?: Maybe<Array<Maybe<PagesSectionEntryUnion>>>;
  ping?: Maybe<Scalars['String']['output']>;
  /** This query is used to query for a single user. */
  user?: Maybe<UserInterface>;
  /** This query is used to return the number of users. */
  userCount: Scalars['Int']['output'];
  /** This query is used to query for users. */
  users?: Maybe<Array<Maybe<UserInterface>>>;
};


export type QueryAddressArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAddressCountArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAssetCountArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAssetsArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryButtonGroupFieldEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDynamicSectionFieldEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEntryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEntryCountArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHomePageEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHomePageEntryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNewsCategoriesEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNewsEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPagesEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserArgs = {
  affiliatedSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  affiliatedSiteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']['input']>;
  authors?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUserCountArgs = {
  affiliatedSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  affiliatedSiteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']['input']>;
  authors?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersArgs = {
  affiliatedSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  affiliatedSiteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']['input']>;
  authors?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SearchTermOptions = {
  exact?: InputMaybe<Scalars['Boolean']['input']>;
  exclude?: InputMaybe<Scalars['Boolean']['input']>;
  subLeft?: InputMaybe<Scalars['Boolean']['input']>;
  subRight?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User = ElementInterface & UserInterface & {
  __typename?: 'User';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The user’s addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** The handle of the site the user is affiliated with. */
  affiliatedSiteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the user is affiliated with. */
  affiliatedSiteId?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The user’s email. */
  email?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The user’s first name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The user’s first name or username. */
  friendlyName?: Maybe<Scalars['String']['output']>;
  /** The user’s full name. */
  fullName?: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The user’s last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The user’s full name or username. */
  name: Scalars['String']['output'];
  /** The user’s photo. */
  photo?: Maybe<AssetInterface>;
  /** The user’s preferences. */
  preferences: Scalars['String']['output'];
  /** The user’s preferred language. */
  preferredLanguage?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The username. */
  username?: Maybe<Scalars['String']['output']>;
};


export type User_CountArgs = {
  field: Scalars['String']['input'];
};


export type UserAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all users. */
export type UserInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The user’s addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** The handle of the site the user is affiliated with. */
  affiliatedSiteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the user is affiliated with. */
  affiliatedSiteId?: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The user’s email. */
  email?: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The user’s first name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The user’s first name or username. */
  friendlyName?: Maybe<Scalars['String']['output']>;
  /** The user’s full name. */
  fullName?: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The user’s last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The user’s full name or username. */
  name: Scalars['String']['output'];
  /** The user’s photo. */
  photo?: Maybe<AssetInterface>;
  /** The user’s preferences. */
  preferences: Scalars['String']['output'];
  /** The user’s preferred language. */
  preferredLanguage?: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The username. */
  username?: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all users. */
export type UserInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all users. */
export type UserInterfaceAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserRelationCriteriaInput = {
  /** Determines which site(s) the users should be affiliated with. */
  affiliatedSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the users should be affiliated with. */
  affiliatedSiteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only elements that have been archived. */
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on whether the users have uploaded any assets. */
  assetUploaders?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on whether the users are listed as the author of any entries. */
  authors?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ email addresses. */
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ first names. */
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the users’ full names. */
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the user group the users belong to. */
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only users that have (or don’t have) a user photo. */
  hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ last names. */
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to elements that do not relate to the provided element IDs. */
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  /** Narrows the relations based on the field they were created in. */
  relatedViaField?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the relations based on the site they were created in. */
  relatedViaSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Defines the default options that should be applied terms within the `search` argument. */
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ usernames. */
  username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ButtonGroupFieldEntryUnion = Button_Entry;

export type ButtonGroup_MatrixField = Button_Entry;

export type Button_Entry = ElementInterface & EntryInterface & {
  __typename?: 'button_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The primary entry author. */
  author?: Maybe<UserInterface>;
  /** The primary entry author’s ID. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** The entry authors’ IDs. */
  authorIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** The entry authors. */
  authors?: Maybe<Array<Maybe<UserInterface>>>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  path?: Maybe<LinkData>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};


export type Button_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type Button_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Button_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Button_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Button_EntryDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Button_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Button_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Button_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Button_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Button_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Button_EntryVariantArgs = {
  label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DynamicSectionFieldEntryUnion = ImageCarousel_Entry;

export type DynamicSection_MatrixField = ImageCarousel_Entry;

export type HeroImages_Asset = AssetInterface & ElementInterface & {
  __typename?: 'heroImages_Asset';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The file extension for the asset file. */
  extension: Scalars['String']['output'];
  /** The filename of the asset file. */
  filename: Scalars['String']['output'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int']['output'];
  /** Returns the file’s format. */
  format?: Maybe<Scalars['String']['output']>;
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean']['output'];
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']['output']>;
  /** The file kind. */
  kind: Scalars['String']['output'];
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String']['output'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The user who first added this asset (if known). */
  uploader?: Maybe<UserInterface>;
  /** The ID of the user who first added this asset (if known). */
  uploaderId?: Maybe<Scalars['Int']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']['output']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']['output']>;
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars['Int']['output']>;
};


export type HeroImages_Asset_CountArgs = {
  field: Scalars['String']['input'];
};


export type HeroImages_AssetFormatArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroImages_AssetHeightArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroImages_AssetNextArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HeroImages_AssetPrevArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HeroImages_AssetSrcsetArgs = {
  sizes: Array<Scalars['String']['input']>;
};


export type HeroImages_AssetUploaderArgs = {
  affiliatedSite?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  affiliatedSiteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  assetUploaders?: InputMaybe<Scalars['Boolean']['input']>;
  authors?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HeroImages_AssetUrlArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroImages_AssetWidthArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  immediately?: InputMaybe<Scalars['Boolean']['input']>;
  interlace?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  transform?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type HomePageSectionEntryUnion = Home_Entry;

export type Home_Entry = ElementInterface & EntryInterface & {
  __typename?: 'home_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The primary entry author. */
  author?: Maybe<UserInterface>;
  /** The primary entry author’s ID. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** The entry authors’ IDs. */
  authorIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** The entry authors. */
  authors?: Maybe<Array<Maybe<UserInterface>>>;
  brow?: Maybe<Scalars['String']['output']>;
  buttonGroup: Array<Maybe<ButtonGroup_MatrixField>>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  heroImage: Array<Maybe<AssetInterface>>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type Home_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type Home_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Home_EntryButtonGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Home_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Home_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Home_EntryDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Home_EntryHeroImageArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Home_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Home_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Home_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Home_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Home_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageCarousel_Entry = ElementInterface & EntryInterface & {
  __typename?: 'imageCarousel_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The primary entry author. */
  author?: Maybe<UserInterface>;
  /** The primary entry author’s ID. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** The entry authors’ IDs. */
  authorIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** The entry authors. */
  authors?: Maybe<Array<Maybe<UserInterface>>>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  images: Array<Maybe<AssetInterface>>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type ImageCarousel_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type ImageCarousel_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageCarousel_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageCarousel_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageCarousel_EntryDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageCarousel_EntryImagesArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ImageCarousel_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageCarousel_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageCarousel_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageCarousel_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageCarousel_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavItem_Entry = ElementInterface & EntryInterface & {
  __typename?: 'navItem_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The primary entry author. */
  author?: Maybe<UserInterface>;
  /** The primary entry author’s ID. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** The entry authors’ IDs. */
  authorIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** The entry authors. */
  authors?: Maybe<Array<Maybe<UserInterface>>>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  path?: Maybe<LinkData>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type NavItem_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type NavItem_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NavItem_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NavItem_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NavItem_EntryDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NavItem_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NavItem_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NavItem_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NavItem_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NavItem_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavigationSectionEntryUnion = NavItem_Entry;

export type NewsArticle_Entry = ElementInterface & EntryInterface & {
  __typename?: 'newsArticle_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The primary entry author. */
  author?: Maybe<UserInterface>;
  /** The primary entry author’s ID. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** The entry authors’ IDs. */
  authorIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** The entry authors. */
  authors?: Maybe<Array<Maybe<UserInterface>>>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  categories: Array<Maybe<EntryInterface>>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  dynamicSection: Array<Maybe<DynamicSection_MatrixField>>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  heroImage: Array<Maybe<AssetInterface>>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type NewsArticle_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type NewsArticle_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsArticle_EntryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsArticle_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsArticle_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsArticle_EntryDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsArticle_EntryDynamicSectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsArticle_EntryHeroImageArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified?: InputMaybe<Scalars['String']['input']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type NewsArticle_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsArticle_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsArticle_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsArticle_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsArticle_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewsCategoriesSectionEntryUnion = NewsCategory_Entry;

export type NewsCategory_Entry = ElementInterface & EntryInterface & {
  __typename?: 'newsCategory_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The primary entry author. */
  author?: Maybe<UserInterface>;
  /** The primary entry author’s ID. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** The entry authors’ IDs. */
  authorIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** The entry authors. */
  authors?: Maybe<Array<Maybe<UserInterface>>>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type NewsCategory_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type NewsCategory_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsCategory_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsCategory_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsCategory_EntryDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsCategory_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsCategory_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsCategory_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsCategory_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsCategory_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewsSectionEntryUnion = NewsArticle_Entry;

export type PageEntry_Entry = ElementInterface & EntryInterface & {
  __typename?: 'pageEntry_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The primary entry author. */
  author?: Maybe<UserInterface>;
  /** The primary entry author’s ID. */
  authorId?: Maybe<Scalars['Int']['output']>;
  /** The entry authors’ IDs. */
  authorIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** The entry authors. */
  authors?: Maybe<Array<Maybe<UserInterface>>>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The current revision for the entry. */
  currentRevision?: Maybe<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The creator of a given draft. */
  draftCreator?: Maybe<UserInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>;
  /** The drafts for the entry. */
  drafts?: Maybe<Array<Maybe<EntryInterface>>>;
  dynamicSection: Array<Maybe<DynamicSection_MatrixField>>;
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The handle of the field that contains the entry. */
  fieldHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the field that contains the entry. */
  fieldId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The ID of the entry’s owner element. */
  ownerId?: Maybe<Scalars['Int']['output']>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The creator of a given revision. */
  revisionCreator?: Maybe<UserInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>;
  /** The revisions for the entry. */
  revisions?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The entry’s position within the field that contains it. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>;
};


export type PageEntry_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type PageEntry_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageEntry_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageEntry_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageEntry_EntryDraftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageEntry_EntryDynamicSectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageEntry_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageEntry_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageEntry_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageEntry_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageEntry_EntryRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  ancestorDist?: InputMaybe<Scalars['Int']['input']>;
  ancestorOf?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  brow?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist?: InputMaybe<Scalars['Int']['input']>;
  descendantOf?: InputMaybe<Scalars['Int']['input']>;
  draftCreator?: InputMaybe<Scalars['Int']['input']>;
  draftId?: InputMaybe<Scalars['Int']['input']>;
  draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  drafts?: InputMaybe<Scalars['Boolean']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  field?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
  heroImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  notRelatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  path?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter?: InputMaybe<Scalars['Int']['input']>;
  positionedBefore?: InputMaybe<Scalars['Int']['input']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
  primaryOwnerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  revisionCreator?: InputMaybe<Scalars['Int']['input']>;
  revisionId?: InputMaybe<Scalars['Int']['input']>;
  revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
  revisions?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchTermOptions?: InputMaybe<SearchTermOptions>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withProvisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PagesSectionEntryUnion = PageEntry_Entry;

export type ImageCarouselBlockFragment = { title: string | null, images: Array<{ id: string | null, url: string | null, title: string | null, width: number | null, height: number | null } | null> };

export type HomePageQueryVariables = Exact<{
  canonicalId?: unknown;
  provisionalDrafts?: boolean | null | undefined;
}>;


export type HomePageQuery = { entry:
    | { id: string | null, title: string | null, brow: string | null, subtitle: string | null, heroImage: Array<{ url: string | null, alt: string | null, width: number | null, height: number | null } | null>, buttonGroup: Array<{ title: string | null, variant: string | null, path: { url: string | null, target: string | null } | null } | null> }
    | Record<PropertyKey, never>
   | null };

export type NavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type NavigationQuery = { navigationEntries: Array<{ id: string | null, title: string | null, path: { url: string | null, target: string | null, label: string | null, element:
        | { uri: string | null }
        | { uri: string | null }
        | { uri: string | null }
        | { uri: string | null }
        | { uri: string | null }
        | { uri: string | null }
        | { uri: string | null }
        | { uri: string | null }
        | { uri: string | null }
        | { uri: string | null }
        | { uri: string | null }
       | null } | null, children: Array<
      | { id: string | null, title: string | null, path: { url: string | null, target: string | null, label: string | null, element:
            | { uri: string | null }
            | { uri: string | null }
            | { uri: string | null }
            | { uri: string | null }
            | { uri: string | null }
            | { uri: string | null }
            | { uri: string | null }
            | { uri: string | null }
            | { uri: string | null }
            | { uri: string | null }
            | { uri: string | null }
           | null } | null }
      | Record<PropertyKey, never>
    > } | null> | null };

export type NewsListingQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsListingQuery = { newsEntries: Array<{ id: string | null, title: string | null, slug: string | null, dateCreated: unknown, summary: string | null, heroImage: Array<{ url: string | null, alt: string | null } | null>, categories: Array<
      | { id: string | null, title: string | null, slug: string | null }
      | Record<PropertyKey, never>
     | null> } | null> | null };

export type NewsArticleQueryVariables = Exact<{
  slug?: Array<string | null | undefined> | string | null | undefined;
}>;


export type NewsArticleQuery = { entry:
    | { id: string | null, title: string | null, slug: string | null, dateCreated: unknown, summary: string | null, heroImage: Array<{ alt: string | null, width: number | null, height: number | null, thumb: string | null, full: string | null } | null>, categories: Array<
        | { id: string | null, title: string | null, slug: string | null }
        | Record<PropertyKey, never>
       | null>, dynamicSection: Array<{ __typename: 'imageCarousel_Entry', id: string | null, title: string | null, images: Array<{ id: string | null, url: string | null, title: string | null, width: number | null, height: number | null } | null> } | null> }
    | Record<PropertyKey, never>
   | null };

export type NewsCategoryQueryVariables = Exact<{
  slug?: Array<string | null | undefined> | string | null | undefined;
}>;


export type NewsCategoryQuery = { category:
    | { id: string | null, title: string | null, slug: string | null }
    | Record<PropertyKey, never>
   | null, articles: Array<{ id: string | null, title: string | null, slug: string | null, dateCreated: unknown, summary: string | null, heroImage: Array<{ url: string | null, alt: string | null } | null>, categories: Array<
      | { id: string | null, title: string | null, slug: string | null }
      | Record<PropertyKey, never>
     | null> } | null> | null };

export type PageEntryQueryVariables = Exact<{
  slug?: Array<string | null | undefined> | string | null | undefined;
}>;


export type PageEntryQuery = { entry:
    | { id: string | null, typeHandle: string }
    | { id: string | null, typeHandle: string }
    | { id: string | null, typeHandle: string }
    | { id: string | null, typeHandle: string }
    | { id: string | null, typeHandle: string }
    | { id: string | null, typeHandle: string }
    | { id: string | null, typeHandle: string, dynamicSection: Array<{ __typename: 'imageCarousel_Entry', id: string | null, title: string | null, images: Array<{ id: string | null, url: string | null, title: string | null, width: number | null, height: number | null } | null> } | null> }
   | null };
