import { actions } from '../actions/authed'
import { getters } from '../getters/authed'
import { mutations } from '../mutations/authed'

const state = {
	isLogin: false,
	Authorization: '',
	tokens: null,
	wxAppName: {},
	userInfo: null,
	latitudeAndLongitude: null,
	cityCode: null,
	provinceCityCode: null,
	bindMobile: null,
	smsCode: null,
}

export default {
	namespaced: true,
	state: state,
	actions: actions,
	getters: getters,
	mutations: mutations
}
