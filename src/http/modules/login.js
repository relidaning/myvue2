import http from '@/http/httpRequest.js'

export function getToken() {
    return http({
        url: '/auth',
        method: 'get'
    })
}