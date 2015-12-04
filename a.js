#!/bin/bash

###

################################################################
#
#   Qihoo project source deploy tool
#   @Wiki : http://add.corp.qihoo.net:8360/display/platform/deploy_tools 
#
###############################################################

# Terminal Encoding 
export LANGUAGE="utf-8"
#export LANGUAGE="gbk"

# Project Name , Basename Of Dir
PROJECT_NAME="SoftMgr"

# Project Version 
VERSION="1.0.1"

# Project SVN URL
SVN_URL="https://portal.src.corp.qihoo.net/svn/SoftMgr/"

# Online Cluster 
#CCX=""
#BJT=""
online_cluster="10.108.90.13"

#  Test Cluster
beta_cluster="10.108.90.13"

#  Ssh User
SSH_USER="sync360"

#  Remote Dest Deploy Project Dir
REMOTE_DEPLOY_DIR="/home/q/system/$PROJECT_NAME"
#  Remote Dest Deploy Project Real Dir
REAL_REMOTE_DEPLOY_DIR="/home/q/system/$PROJECT_NAME-$VERSION"


#  For deploy-release.sh , Exec External Shell , Comment Out It If No Need
AUTORUN_RELEASE_CMD="cd $REMOTE_DEPLOY_DIR;sh project/autoload_builder.sh"

#  For deploy-package.sh , Exec External Shell , Comment Out It If No Need
#SUDO_AUTORUN_PACKAGE="bootstrap.sh"
#AUTORUN_PACKAGE="bootstrap.sh"

DEPLOY_BASENAME=`basename $REMOTE_DEPLOY_DIR`
TAR_EXCLUDE="--exclude $DEPLOY_BASENAME/logs --exclude $DEPLOY_BASENAME/src/www/thumb"

#  deploy debug flag
UTILS_DEBUG=0

##################################################################################################

SSH="sudo -u $SSH_USER ssh"
SCP="sudo -u $SSH_USER scp"

LOCAL_TMP_DIR="/tmp/deploy_tools/$USER"

BLACKLIST='(.*\.tmp$)|(.*\.log$)|(.*\.svn.*)'

ONLINE_TMP_DIR="/tmp"

ONLINE_BACKUP_DIR="/home/$SSH_USER/deploy_history/$PROJECT_NAME"          
LOCAL_DEPLOY_HISTORY_DIR="/home/$USER/deploy_history/$PROJECT_NAME"  

DEPLOY_HISTORY_FILE="$LOCAL_DEPLOY_HISTORY_DIR/deploy_history"            
DEPLOY_HISTORY_FILE_BAK="$LOCAL_DEPLOY_HISTORY_DIR/deploy_history.bak" 
