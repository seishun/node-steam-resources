var ProtoBuf = require('protobufjs');
var Steam = exports;

Steam.Internal = loadProtoFiles([
  'steamclient/steammessages_base.proto',
  'steamclient/encrypted_app_ticket.proto',
  'steamclient/steammessages_clientserver.proto',
  'steamclient/steammessages_clientserver_2.proto'
]);

Steam.GC = {
  CSGO: {
    Internal: loadProtoFiles(['csgo/cstrike15_gcmessages.proto'])
  },
  Dota: {
    Internal: loadProtoFiles([
      'dota/network_connection.proto',
      'dota/dota_gcmessages_common.proto',
      'dota/dota_gcmessages_client.proto',
      'dota/dota_gcmessages_client_fantasy.proto',
      'dota/dota_gcmessages_server.proto'
    ])
  },
  Internal: loadProtoFiles([
    'dota/steammessages.proto',
    'dota/gcsystemmsgs.proto',
    'dota/base_gcmessages.proto',
    'dota/gcsdk_gcmessages.proto',
    'dota/econ_gcmessages.proto'
  ])
};

Steam.Unified = {
  Internal: loadProtoFiles([
    'steamclient/steammessages_unified_base.steamclient.proto',
    'steamclient/steammessages_broadcast.steamclient.proto',
    'steamclient/steammessages_cloud.steamclient.proto',
    'steamclient/steammessages_credentials.steamclient.proto',
    'steamclient/steammessages_depotbuilder.steamclient.proto',
    'steamclient/steammessages_deviceauth.steamclient.proto',
    'steamclient/steammessages_econ.steamclient.proto',
    'steamclient/steammessages_gamenotifications.steamclient.proto',
    'steamclient/steammessages_gameservers.steamclient.proto',
    'steamclient/steammessages_linkfilter.steamclient.proto',
    'steamclient/steammessages_inventory.steamclient.proto',
    'steamclient/steammessages_offline.steamclient.proto',
    'steamclient/steammessages_parental.steamclient.proto',
    'steamclient/steammessages_partnerapps.steamclient.proto',
    'steamclient/steammessages_player.steamclient.proto',
    'steamclient/steammessages_publishedfile.steamclient.proto',
    'steamclient/steammessages_secrets.steamclient.proto',
    'steamclient/steammessages_twofactor.steamclient.proto',
    'steamclient/steammessages_video.steamclient.proto'
  ])
};

Steam.Unified.Internal.Steamworks = loadProtoFiles([
  'dota/steammessages_cloud.steamworkssdk.proto',
  'dota/steammessages_oauth.steamworkssdk.proto',
  'dota/steammessages_publishedfile.steamworkssdk.proto'
]);

require('./steam_language_parser');

function loadProtoFiles(paths) {
  var builder = ProtoBuf.newBuilder();
  paths.forEach(function(path) {
    ProtoBuf.loadProtoFile(__dirname + '/protobufs/' + path, builder);
  });
  return builder.build();
}
