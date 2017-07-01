// @flow


/**
* Note: We use the Covariant modifier (+) for almost all properties
*       of all domain types.
*       Every attribute marked with a + is automatically readonly
*
*  See: https://flow.org/en/docs/types/interfaces/#toc-covariant-read-only-properties-on-interfaces
*/

export type SshKey = {
  +key: string,
  +type?: string,
};

export type SshKeys = { +[sshKeyName: string]: SshKey };

export type Client = {
  +deploy_private_key?: string,
  +php_admin_value?: { [key: string]: string },
  +ssh_keys?: SshKeys,
};

export type Site = {
  +sitegroup: string,
  +uid: number,
  +site_branch: string,
  +site_environment: string,
  +domains: Array<string>,
  +sslcerttype: string,
  +fpm_profile: string,
  +cron?: { type: string, minute: string },
  +php_flags: { [name: string]: mixed },
  +xdebug: string,
  +php_admin_values: { [key: string]: string },
};

export type SiteGroup = {
  +client: string,
  +ssh_keys?: SshKeys,
  +php_values?: { [key: string]: mixed },
  +production_url?: string,
  +git_url?: string,
  +slack?: {
    +webhook: string,
    +channel: string,
    +inform_start: boolean,
    +inform_channel: string,
  },
};

export type ClientsFile = {
  +amazeeio_clients: {
    +[client_name: string]: ?Client,
  },
};

export type SiteGroupsFile = {
  +amazeeio_sitegroups: {
    +[site_group_name: string]: SiteGroup,
  },
};

export type SiteFile = {
  +drupalsites: {
    +[site_name: string]: Site,
  },
  +classes: any,
  +stack_environment: Object,
  +'drupalhosting::profiles::client::ipv4_address': string,
  +'profile_monitoring::profiles::client::ipv4_address': string,
  +'profile_monitoring::client::commands:': Object,
  +'profile_icinga2::host::hiera_vars': Object,
};

export type SiteFiles = {
  +[site_path: string]: SiteFile,
};

// process.env stuff
export type ApiEnv = {
  GIT_USERNAME: string,
  GIT_PASSWORD: string,
  GIT_REPOSITORY: string,
  // Upstream repository to sync
  GIT_BRANCH_PULL: string,
  // branch to pull from
  GIT_BRANCH_PUSH: string,
  // branch to push to
  GIT_PUSH_ENABLE: boolean,
  GIT_SYNC_INTERVAL: number,
  GIT_REPO_DIR: string,
};

export type { State } from './reducer';
export type { ApiStore } from './createStore';
export type { Context } from './app';
