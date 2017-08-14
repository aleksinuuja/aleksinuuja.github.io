
var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'game.data';
    var REMOTE_PACKAGE_BASE = 'game.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
                              Module['locateFile'](REMOTE_PACKAGE_BASE) :
                              ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);
  
    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

    function assert(check, msg) {
      if (!check) throw msg + new Error().stack;
    }
Module['FS_createPath']('/', '.git', true, true);
Module['FS_createPath']('/.git', 'hooks', true, true);
Module['FS_createPath']('/.git', 'info', true, true);
Module['FS_createPath']('/.git', 'logs', true, true);
Module['FS_createPath']('/.git/logs', 'refs', true, true);
Module['FS_createPath']('/.git/logs/refs', 'heads', true, true);
Module['FS_createPath']('/.git/logs/refs', 'remotes', true, true);
Module['FS_createPath']('/.git/logs/refs/remotes', 'origin', true, true);
Module['FS_createPath']('/.git', 'objects', true, true);
Module['FS_createPath']('/.git/objects', '06', true, true);
Module['FS_createPath']('/.git/objects', '09', true, true);
Module['FS_createPath']('/.git/objects', '0c', true, true);
Module['FS_createPath']('/.git/objects', '0d', true, true);
Module['FS_createPath']('/.git/objects', '16', true, true);
Module['FS_createPath']('/.git/objects', '1c', true, true);
Module['FS_createPath']('/.git/objects', '23', true, true);
Module['FS_createPath']('/.git/objects', '26', true, true);
Module['FS_createPath']('/.git/objects', '29', true, true);
Module['FS_createPath']('/.git/objects', '2a', true, true);
Module['FS_createPath']('/.git/objects', '2e', true, true);
Module['FS_createPath']('/.git/objects', '3a', true, true);
Module['FS_createPath']('/.git/objects', '43', true, true);
Module['FS_createPath']('/.git/objects', '44', true, true);
Module['FS_createPath']('/.git/objects', '4d', true, true);
Module['FS_createPath']('/.git/objects', '4e', true, true);
Module['FS_createPath']('/.git/objects', '50', true, true);
Module['FS_createPath']('/.git/objects', '57', true, true);
Module['FS_createPath']('/.git/objects', '6c', true, true);
Module['FS_createPath']('/.git/objects', '73', true, true);
Module['FS_createPath']('/.git/objects', '76', true, true);
Module['FS_createPath']('/.git/objects', '81', true, true);
Module['FS_createPath']('/.git/objects', '87', true, true);
Module['FS_createPath']('/.git/objects', '89', true, true);
Module['FS_createPath']('/.git/objects', '8b', true, true);
Module['FS_createPath']('/.git/objects', '8d', true, true);
Module['FS_createPath']('/.git/objects', '8e', true, true);
Module['FS_createPath']('/.git/objects', '91', true, true);
Module['FS_createPath']('/.git/objects', '93', true, true);
Module['FS_createPath']('/.git/objects', '9b', true, true);
Module['FS_createPath']('/.git/objects', '9e', true, true);
Module['FS_createPath']('/.git/objects', '9f', true, true);
Module['FS_createPath']('/.git/objects', 'a0', true, true);
Module['FS_createPath']('/.git/objects', 'a1', true, true);
Module['FS_createPath']('/.git/objects', 'a2', true, true);
Module['FS_createPath']('/.git/objects', 'a3', true, true);
Module['FS_createPath']('/.git/objects', 'a4', true, true);
Module['FS_createPath']('/.git/objects', 'a5', true, true);
Module['FS_createPath']('/.git/objects', 'a8', true, true);
Module['FS_createPath']('/.git/objects', 'aa', true, true);
Module['FS_createPath']('/.git/objects', 'ab', true, true);
Module['FS_createPath']('/.git/objects', 'b7', true, true);
Module['FS_createPath']('/.git/objects', 'b8', true, true);
Module['FS_createPath']('/.git/objects', 'bd', true, true);
Module['FS_createPath']('/.git/objects', 'bf', true, true);
Module['FS_createPath']('/.git/objects', 'c3', true, true);
Module['FS_createPath']('/.git/objects', 'c8', true, true);
Module['FS_createPath']('/.git/objects', 'cd', true, true);
Module['FS_createPath']('/.git/objects', 'd5', true, true);
Module['FS_createPath']('/.git/objects', 'd6', true, true);
Module['FS_createPath']('/.git/objects', 'd8', true, true);
Module['FS_createPath']('/.git/objects', 'db', true, true);
Module['FS_createPath']('/.git/objects', 'e8', true, true);
Module['FS_createPath']('/.git/objects', 'ec', true, true);
Module['FS_createPath']('/.git/objects', 'ed', true, true);
Module['FS_createPath']('/.git/objects', 'f3', true, true);
Module['FS_createPath']('/.git/objects', 'f5', true, true);
Module['FS_createPath']('/.git/objects', 'f9', true, true);
Module['FS_createPath']('/.git', 'refs', true, true);
Module['FS_createPath']('/.git/refs', 'heads', true, true);
Module['FS_createPath']('/.git/refs', 'remotes', true, true);
Module['FS_createPath']('/.git/refs/remotes', 'origin', true, true);
Module['FS_createPath']('/', 'gamestates', true, true);
Module['FS_createPath']('/', 'graphics', true, true);
Module['FS_createPath']('/', 'sounds', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;

        Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        Module['removeRunDependency']('fp ' + that.name);

        this.requests[this.name] = null;
      },
    };

        var files = metadata.files;
        for (i = 0; i < files.length; ++i) {
          new DataRequest(files[i].start, files[i].end, files[i].crunched, files[i].audio).open('GET', files[i].filename);
        }

  
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though
        // (we may be allocating before malloc is ready, during startup).
        if (Module['SPLIT_MEMORY']) Module.printErr('warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting');
        var ptr = Module['getMemory'](byteArray.length);
        Module['HEAPU8'].set(byteArray, ptr);
        DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
  
          var files = metadata.files;
          for (i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }
              Module['removeRunDependency']('datafile_game.data');

    };
    Module['addRunDependency']('datafile_game.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

 }
 loadPackage({"files": [{"audio": 0, "start": 0, "crunched": 0, "end": 6148, "filename": "/.DS_Store"}, {"audio": 0, "start": 6148, "crunched": 0, "end": 8418, "filename": "/audio.lua"}, {"audio": 0, "start": 8418, "crunched": 0, "end": 9405, "filename": "/button.lua"}, {"audio": 0, "start": 9405, "crunched": 0, "end": 9679, "filename": "/conf.lua"}, {"audio": 0, "start": 9679, "crunched": 0, "end": 12496, "filename": "/main.lua"}, {"audio": 0, "start": 12496, "crunched": 0, "end": 19483, "filename": "/question.lua"}, {"audio": 0, "start": 19483, "crunched": 0, "end": 19507, "filename": "/README.md"}, {"audio": 0, "start": 19507, "crunched": 0, "end": 20075, "filename": "/ticker.lua"}, {"audio": 0, "start": 20075, "crunched": 0, "end": 22998, "filename": "/tween2.lua"}, {"audio": 0, "start": 22998, "crunched": 0, "end": 23011, "filename": "/.git/COMMIT_EDITMSG"}, {"audio": 0, "start": 23011, "crunched": 0, "end": 23337, "filename": "/.git/config"}, {"audio": 0, "start": 23337, "crunched": 0, "end": 23410, "filename": "/.git/description"}, {"audio": 0, "start": 23410, "crunched": 0, "end": 23433, "filename": "/.git/HEAD"}, {"audio": 0, "start": 23433, "crunched": 0, "end": 25350, "filename": "/.git/index"}, {"audio": 0, "start": 25350, "crunched": 0, "end": 25391, "filename": "/.git/ORIG_HEAD"}, {"audio": 0, "start": 25391, "crunched": 0, "end": 25869, "filename": "/.git/hooks/applypatch-msg.sample"}, {"audio": 0, "start": 25869, "crunched": 0, "end": 26765, "filename": "/.git/hooks/commit-msg.sample"}, {"audio": 0, "start": 26765, "crunched": 0, "end": 26954, "filename": "/.git/hooks/post-update.sample"}, {"audio": 0, "start": 26954, "crunched": 0, "end": 27378, "filename": "/.git/hooks/pre-applypatch.sample"}, {"audio": 0, "start": 27378, "crunched": 0, "end": 29020, "filename": "/.git/hooks/pre-commit.sample"}, {"audio": 0, "start": 29020, "crunched": 0, "end": 30368, "filename": "/.git/hooks/pre-push.sample"}, {"audio": 0, "start": 30368, "crunched": 0, "end": 35319, "filename": "/.git/hooks/pre-rebase.sample"}, {"audio": 0, "start": 35319, "crunched": 0, "end": 35863, "filename": "/.git/hooks/pre-receive.sample"}, {"audio": 0, "start": 35863, "crunched": 0, "end": 37102, "filename": "/.git/hooks/prepare-commit-msg.sample"}, {"audio": 0, "start": 37102, "crunched": 0, "end": 40712, "filename": "/.git/hooks/update.sample"}, {"audio": 0, "start": 40712, "crunched": 0, "end": 40952, "filename": "/.git/info/exclude"}, {"audio": 0, "start": 40952, "crunched": 0, "end": 42117, "filename": "/.git/logs/HEAD"}, {"audio": 0, "start": 42117, "crunched": 0, "end": 43123, "filename": "/.git/logs/refs/heads/master"}, {"audio": 0, "start": 43123, "crunched": 0, "end": 43883, "filename": "/.git/logs/refs/remotes/origin/master"}, {"audio": 0, "start": 43883, "crunched": 0, "end": 44159, "filename": "/.git/objects/06/e96db686bfd6f522303ca01023c6011b8c1d08"}, {"audio": 0, "start": 44159, "crunched": 0, "end": 45603, "filename": "/.git/objects/09/fdb9c968b3faa1e36b9bce828adebb38891c31"}, {"audio": 0, "start": 45603, "crunched": 0, "end": 48928, "filename": "/.git/objects/0c/7946f7e2fe28626b4b175c0e5c2cfe35567294"}, {"audio": 0, "start": 48928, "crunched": 0, "end": 54573, "filename": "/.git/objects/0d/642d1a273c225e6bbd9b270263aa73a4a28a78"}, {"audio": 0, "start": 54573, "crunched": 0, "end": 56538, "filename": "/.git/objects/16/680356e13540b24df11a92add45ac122355f82"}, {"audio": 0, "start": 56538, "crunched": 0, "end": 56709, "filename": "/.git/objects/1c/3159be18ff33d61287fa90cb8d10d2ef8b635c"}, {"audio": 0, "start": 56709, "crunched": 0, "end": 365459, "filename": "/.git/objects/23/83421d78b011b91d1c1833411980a238443c58"}, {"audio": 0, "start": 365459, "crunched": 0, "end": 374590, "filename": "/.git/objects/26/e3591a054039336c84fbd214a21f38b83f980b"}, {"audio": 0, "start": 374590, "crunched": 0, "end": 374765, "filename": "/.git/objects/29/960e89132e5fb6a1b6defed8bbeff039233861"}, {"audio": 0, "start": 374765, "crunched": 0, "end": 376548, "filename": "/.git/objects/2a/219bc416752f8b068e9a2adb309c2a9805b2ea"}, {"audio": 0, "start": 376548, "crunched": 0, "end": 377488, "filename": "/.git/objects/2e/59197352985590d7911df3d1f445aacd90b3cb"}, {"audio": 0, "start": 377488, "crunched": 0, "end": 378392, "filename": "/.git/objects/3a/72e6f21dbcec656847187dcafe28baed667458"}, {"audio": 0, "start": 378392, "crunched": 0, "end": 383150, "filename": "/.git/objects/43/3edeb9f2e51b98104fde3eaca66f5a52ece4ff"}, {"audio": 0, "start": 383150, "crunched": 0, "end": 390020, "filename": "/.git/objects/44/30ec0d4564edc3c447e9ad9609aec9dd495a6f"}, {"audio": 0, "start": 390020, "crunched": 0, "end": 394138, "filename": "/.git/objects/4d/d2cea8213845515769146846e53e397b1f2abb"}, {"audio": 0, "start": 394138, "crunched": 0, "end": 394282, "filename": "/.git/objects/4e/45676402cf41b0ac7eb11fccb228b04b2482b8"}, {"audio": 0, "start": 394282, "crunched": 0, "end": 394537, "filename": "/.git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6"}, {"audio": 0, "start": 394537, "crunched": 0, "end": 396262, "filename": "/.git/objects/57/4921e03a975b326d4ece87f17182ee6c196845"}, {"audio": 0, "start": 396262, "crunched": 0, "end": 396661, "filename": "/.git/objects/6c/aff98ce24349fc5d9197ab62746c2aedcf2c86"}, {"audio": 0, "start": 396661, "crunched": 0, "end": 961260, "filename": "/.git/objects/73/fe8de91394759899d23127deab7306b5a1afa4"}, {"audio": 0, "start": 961260, "crunched": 0, "end": 1509303, "filename": "/.git/objects/76/dbd1d696f393da47830185737d9e48662adf7e"}, {"audio": 0, "start": 1509303, "crunched": 0, "end": 1512572, "filename": "/.git/objects/81/850c7af9e2e80fd23979d93d1b8caf0a51a395"}, {"audio": 0, "start": 1512572, "crunched": 0, "end": 1512662, "filename": "/.git/objects/87/619c1cd32c819e549953b5c37d8f04d223aa9a"}, {"audio": 0, "start": 1512662, "crunched": 0, "end": 1513453, "filename": "/.git/objects/89/b6cfa433b794f507c4782d7d846212df572c92"}, {"audio": 0, "start": 1513453, "crunched": 0, "end": 1515776, "filename": "/.git/objects/8b/78e3ba32acc3ff8e6ddd4bc2c9498eed20167b"}, {"audio": 0, "start": 1515776, "crunched": 0, "end": 1515866, "filename": "/.git/objects/8d/23e6c72e56a06725ed10cdbaa1950e55511d16"}, {"audio": 0, "start": 1515866, "crunched": 0, "end": 1516300, "filename": "/.git/objects/8e/66c4561c71938ea66f26ab1b01a3d7731c1595"}, {"audio": 0, "start": 1516300, "crunched": 0, "end": 2013569, "filename": "/.git/objects/8e/b8bf90eb7c4d9ca21dca6b618d285cfcd0ca0f"}, {"audio": 0, "start": 2013569, "crunched": 0, "end": 2013898, "filename": "/.git/objects/91/a8b3edf9041be2ea4bd48d1578bfb5abd3b084"}, {"audio": 0, "start": 2013898, "crunched": 0, "end": 2630258, "filename": "/.git/objects/93/f8c16af2a7b8e2f2fbd5c10ceee8487f388e4d"}, {"audio": 0, "start": 2630258, "crunched": 0, "end": 2630796, "filename": "/.git/objects/9b/51bc6d3d19f3b93afe20b7636f1d40743f26a1"}, {"audio": 0, "start": 2630796, "crunched": 0, "end": 2630960, "filename": "/.git/objects/9e/9f14d678c1fdbad15c0dc434e7978703b56701"}, {"audio": 0, "start": 2630960, "crunched": 0, "end": 2631049, "filename": "/.git/objects/9f/66ccab50af7797bf3a5338bc90ba7b95e9b9c0"}, {"audio": 0, "start": 2631049, "crunched": 0, "end": 3158733, "filename": "/.git/objects/a0/41b5137c14ae472d9eb163d4b6d6a398e7d0cd"}, {"audio": 0, "start": 3158733, "crunched": 0, "end": 3164422, "filename": "/.git/objects/a0/58927ce918bca4c399881e6995cffcb0881812"}, {"audio": 0, "start": 3164422, "crunched": 0, "end": 3164513, "filename": "/.git/objects/a0/b9fc2ae9db764af67374e8faa87b56195e08a6"}, {"audio": 0, "start": 3164513, "crunched": 0, "end": 3165391, "filename": "/.git/objects/a1/6a8698e20ac63cc7c9d69847c15401e6939750"}, {"audio": 0, "start": 3165391, "crunched": 0, "end": 3167547, "filename": "/.git/objects/a2/24712c373017fb56bb58e1a4d43be986258af2"}, {"audio": 0, "start": 3167547, "crunched": 0, "end": 3167885, "filename": "/.git/objects/a3/ec4e6af4a96daff8d7fc3d301c928db00dc9e1"}, {"audio": 0, "start": 3167885, "crunched": 0, "end": 3167939, "filename": "/.git/objects/a4/dbf3fd0d304c543f5b295209c05e30e6cf1dbe"}, {"audio": 0, "start": 3167939, "crunched": 0, "end": 3168338, "filename": "/.git/objects/a4/e76de5ff86db849e2da714eb15e06a0f53c1d4"}, {"audio": 0, "start": 3168338, "crunched": 0, "end": 3168469, "filename": "/.git/objects/a5/260d757b7afb8c6de4d62b2642bf188fc5cec0"}, {"audio": 0, "start": 3168469, "crunched": 0, "end": 3168626, "filename": "/.git/objects/a8/a1b5f20760170b8521775d743601044a188129"}, {"audio": 0, "start": 3168626, "crunched": 0, "end": 3170277, "filename": "/.git/objects/a8/b764c98c8c74c57978c1c9da4e2346c50cfe99"}, {"audio": 0, "start": 3170277, "crunched": 0, "end": 3170553, "filename": "/.git/objects/aa/57c77d027986ccc3516006e209d7156c7dc8ff"}, {"audio": 0, "start": 3170553, "crunched": 0, "end": 3705527, "filename": "/.git/objects/ab/8c8c2a4f9da91cb177fcf989340f1a18de686a"}, {"audio": 0, "start": 3705527, "crunched": 0, "end": 3705927, "filename": "/.git/objects/ab/a37ae5e7b1ef7bdf9d51c7503c16d58d5b1237"}, {"audio": 0, "start": 3705927, "crunched": 0, "end": 3706195, "filename": "/.git/objects/b7/994320c616a8c74a6e91717adee09f8f8840fa"}, {"audio": 0, "start": 3706195, "crunched": 0, "end": 3706363, "filename": "/.git/objects/b7/c2922f7dad0d53fd769da383c73326635d422c"}, {"audio": 0, "start": 3706363, "crunched": 0, "end": 3706403, "filename": "/.git/objects/b8/f3e2b080d49483f8a572eda0a6e9662527f2a6"}, {"audio": 0, "start": 3706403, "crunched": 0, "end": 4226695, "filename": "/.git/objects/bd/158b0e9ff1d62105843e09798e18066d90e692"}, {"audio": 0, "start": 4226695, "crunched": 0, "end": 4226784, "filename": "/.git/objects/bd/8bc02901ac8e1de05e99c28a99dc57470c3786"}, {"audio": 0, "start": 4226784, "crunched": 0, "end": 4227277, "filename": "/.git/objects/bf/a29815cbe0f2d59a8c1dc4d4409769f3e8f6df"}, {"audio": 0, "start": 4227277, "crunched": 0, "end": 4230113, "filename": "/.git/objects/c3/421707b76f3c8179b989277a96043f01ca28a3"}, {"audio": 0, "start": 4230113, "crunched": 0, "end": 4230651, "filename": "/.git/objects/c8/bcb7c54b11beeb10aabfbe9c79a737039946e3"}, {"audio": 0, "start": 4230651, "crunched": 0, "end": 4306525, "filename": "/.git/objects/cd/c0a512d22562eb0bde46c37f9db30581ad24e3"}, {"audio": 0, "start": 4306525, "crunched": 0, "end": 4309059, "filename": "/.git/objects/d5/0db2541b1f0ba5d8097811afde27b0e33d1d3c"}, {"audio": 0, "start": 4309059, "crunched": 0, "end": 4310232, "filename": "/.git/objects/d6/6fd57e1d5d7d4468aedf00dd124d34ebc9e2a6"}, {"audio": 0, "start": 4310232, "crunched": 0, "end": 4825999, "filename": "/.git/objects/d8/3e79dff063b046953798eca774f718423eaa9c"}, {"audio": 0, "start": 4825999, "crunched": 0, "end": 4826340, "filename": "/.git/objects/db/5192a8e999e89f0ff58c99d403f34682f1a880"}, {"audio": 0, "start": 4826340, "crunched": 0, "end": 4833288, "filename": "/.git/objects/e8/5795736e33dfba5111e06cb1a53426c7b5f334"}, {"audio": 0, "start": 4833288, "crunched": 0, "end": 4833461, "filename": "/.git/objects/ec/0a94d77b1be8a2a36dd047f6df50660cd237b2"}, {"audio": 0, "start": 4833461, "crunched": 0, "end": 4833721, "filename": "/.git/objects/ed/ebfb25886738c62e0b262503e26ffc60040fca"}, {"audio": 0, "start": 4833721, "crunched": 0, "end": 5892178, "filename": "/.git/objects/f3/576235f8d5cbb1ae0e06817505493b5749d4cc"}, {"audio": 0, "start": 5892178, "crunched": 0, "end": 5892355, "filename": "/.git/objects/f5/3c4fe39b7fa79ce9da88b2794ba3177da96434"}, {"audio": 0, "start": 5892355, "crunched": 0, "end": 5898370, "filename": "/.git/objects/f9/59f0a3367493456ec395ff979782e20b5f7385"}, {"audio": 0, "start": 5898370, "crunched": 0, "end": 5898411, "filename": "/.git/refs/heads/master"}, {"audio": 0, "start": 5898411, "crunched": 0, "end": 5898452, "filename": "/.git/refs/remotes/origin/master"}, {"audio": 0, "start": 5898452, "crunched": 0, "end": 5904600, "filename": "/gamestates/.DS_Store"}, {"audio": 0, "start": 5904600, "crunched": 0, "end": 5916900, "filename": "/gamestates/maingame.lua"}, {"audio": 0, "start": 5916900, "crunched": 0, "end": 5923048, "filename": "/graphics/.DS_Store"}, {"audio": 0, "start": 5923048, "crunched": 0, "end": 6109848, "filename": "/graphics/Krungthep.ttf"}, {"audio": 1, "start": 6109848, "crunched": 0, "end": 7170240, "filename": "/sounds/a.wav"}, {"audio": 1, "start": 7170240, "crunched": 0, "end": 8222240, "filename": "/sounds/c.wav"}, {"audio": 1, "start": 8222240, "crunched": 0, "end": 9277040, "filename": "/sounds/c2.wav"}, {"audio": 1, "start": 9277040, "crunched": 0, "end": 10337432, "filename": "/sounds/d.wav"}, {"audio": 1, "start": 10337432, "crunched": 0, "end": 10896352, "filename": "/sounds/d2.wav"}, {"audio": 1, "start": 10896352, "crunched": 0, "end": 11948352, "filename": "/sounds/e.wav"}, {"audio": 1, "start": 11948352, "crunched": 0, "end": 13003152, "filename": "/sounds/f.wav"}, {"audio": 1, "start": 13003152, "crunched": 0, "end": 14055080, "filename": "/sounds/g.wav"}, {"audio": 1, "start": 14055080, "crunched": 0, "end": 15112672, "filename": "/sounds/h.wav"}], "remote_package_size": 15112672, "package_uuid": "a1ddfe44-3e4f-4d39-8e54-30db4955fefb"});

})();
