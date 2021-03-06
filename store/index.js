var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Time from '../entity/Time';
import axios from 'axios';
import WeatherRepositroy from '../repository/WeatherRepository';
import VideoRepositroy from '../repository/VideoRepository';
export var state = function () { return ({
    time: new Time(),
    weatherList: [],
    videoList: [],
    isLoading: false,
    isError: false,
}); };
export var getters = {
    isLoading: function (state) { return state.isLoading; },
    isError: function (state) { return state.isError; },
    weatherList: function (state) { return state.weatherList; },
    videoList: function (state) { return state.videoList; },
    updated: function (state) { return state.time.updated; },
    updatedIso: function (state) { return state.time.updatedIso; },
    updateduk: function (state) { return state.time.updateduk; },
};
export var mutations = {
    startLoading: function (state) {
        state.time = new Time();
        state.isError = false;
        state.isLoading = true;
    },
    finishLoading: function (state) {
        state.isLoading = false;
    },
    setContent: function (state, time) {
        state.time = time;
    },
    setWeatherList: function (state, weatherList) {
        state.weatherList = weatherList;
    },
    setVideoList: function (state, videoList) {
        state.videoList = videoList;
    },
    caughtException: function (state) {
        state.isError = true;
    },
};
export var actions = {
    fetch: function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var response, time, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context.commit('startLoading');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4, axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')];
                    case 2:
                        response = _a.sent();
                        time = new Time(response);
                        context.commit('setContent', time);
                        return [3, 5];
                    case 3:
                        error_1 = _a.sent();
                        return [3, 5];
                    case 4:
                        context.commit('finishLoading');
                        return [7];
                    case 5: return [2];
                }
            });
        });
    },
    fetchWeather: function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var wetherList;
            return __generator(this, function (_a) {
                context.commit('startLoading');
                try {
                    wetherList = WeatherRepositroy.fetchWeatherList();
                    context.commit('setWeatherList', wetherList);
                }
                catch (e) {
                    console.log(e);
                }
                finally {
                    context.commit('finishLoading');
                }
                return [2];
            });
        });
    },
    fetchVideoList: function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var videoList;
            return __generator(this, function (_a) {
                console.log("fetchVideoList!!");
                context.commit('startLoading');
                try {
                    videoList = VideoRepositroy.fetchVideoList();
                    context.commit('setVideoList', videoList);
                }
                catch (e) {
                    console.log(e);
                }
                finally {
                    context.commit('finishLoading');
                }
                return [2];
            });
        });
    }
};
