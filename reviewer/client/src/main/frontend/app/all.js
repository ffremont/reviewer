/**
 * app.js
 */
(function (angular) {
    'use strict';

    function run($location) {
        // récupération $location params


    };
    run.$inject = ['$location'];

    angular.module("reviewer", ["treeControl", "ngTagsInput", "ui.bootstrap", "hljs"]).run(run);
})(angular);

/**
 * header.controller.js
 */
(function (angular) {
    'use strict';

    function HeaderCtrl($uibModal) {
        var me = this;

        me.onClickChangePatch = function () {
            $uibModal.open({
                templateUrl: 'app/change-patch/change-patch.html',
                controller: 'ChangePatchCtrl',
                controllerAs: 'changePathCtrl',
                backdrop: 'static',
                size: "sm"
            });
        };
    };
    HeaderCtrl.$inject = ['$uibModal'];

    angular.module("reviewer").controller('HeaderCtrl', HeaderCtrl);
})(angular);

/**
 * body.controller.js
 */
(function (angular) {
    'use strict';

    function BodyCtrl($q, $location, $log) {
        var me = this;

        me.current = {
            filename: "web.xml"
        };
        me.tags = ["#CR"];

        function searchTags($query) {
            $log.debug("query :" + $query);

            var deferred = $q.defer();
            deferred.resolve(me.tags);
            return deferred.promise;
        }
        // ****************
        me.searchTags = searchTags;


        console.log($location.search());
    };
    BodyCtrl.$inject = ['$q', '$location', '$log'];

    angular.module("reviewer").controller('BodyCtrl', BodyCtrl);
})(angular);

/**
 * patch.service.js
 */
(function (angular) {
    'use strict';

    function PatchService() {
        var me = this;
        me.contentOfFile = null;
        me.tags = [];

        function _parse() {

        }

        function provide(contentOfFile) {

        }

        function searchTags(query) {
            return [];
        }

        function getTags() {
            return me.tags;
        }

        me.provide = provide;
        me.getTags = getTags;
        me.searchTags = searchTags;
    };
    PatchService.$inject = [];

    angular.module("reviewer").service('PatchService', PatchService);
})(angular);

/**
 * explorer/explorer.controller.js
 */
(function (angular) {
    'use strict';

    function ExplorerCtrl() {
        var me = this;

        me.files = [
            {
                "label": "trunk",
                "children": [
                    {
                        "label": "pom.xml",
                        "children": []
                    },
                    {
                        "label": "src",
                        "children": [
                            {
                                "label": "main",
                                "children": [
                                    {
                                        "label": "java",
                                        "children": [{
                                            "label": "test.java",
                                            "children": []
                                        }]
                                    }
            ]
                            }
        ]
                    }
    ]
            },
            {
                "label": "README.txt",
                "children": []
            }
        ];

        function showSelected(node) {
            console.log(node);
        }

        me.showSelected = showSelected;

    };
    ExplorerCtrl.$inject = [];

    angular.module("reviewer").controller('ExplorerCtrl', ExplorerCtrl);
})(angular);

/**
 * code/code.controller.js
 */
(function (angular) {
    'use strict';

    function CodeCtrl() {
        var me = this;

        me.value = "<html>";
        me.type = "html";
    };
    CodeCtrl.$inject = [];

    angular.module("reviewer").controller('CodeCtrl', CodeCtrl);
})(angular);

/**
 * change-patch/change-patch.controller.js
 */
(function (angular) {
    'use strict';

    function ChangePatchCtrl($uibModalInstance) {
        var me = this;

        function change() {

        };

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        };

        // ***********
        me.change = change;
        me.cancel = cancel;
    };
    ChangePatchCtrl.$inject = ['$uibModalInstance'];

    angular.module("reviewer").controller('ChangePatchCtrl', ChangePatchCtrl);
})(angular);