export default function(instance) {
   return {
      postUsers(payload) {
         return instance.post('send/users', payload)
      }
   }
}