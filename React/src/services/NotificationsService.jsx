import api from "./api"

const NotificationsService = {

    get_S_Notifications() {
        return api().get("/seen_notifications");
    },

    getCount_S_Notifications() {
        return api().get(`/count_s_notifications`);
    },

    get_NS_Notifications() {
        return api().get(`/notifications`);
    },

    getCount_NS_Notifications() {
        return api().get(`/count_notifications`);
    },

};

export default NotificationsService;