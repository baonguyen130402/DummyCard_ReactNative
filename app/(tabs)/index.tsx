import { useEffect, useState } from 'react';

import CardList from '@/components/CardList';
import { getUsersData } from '@/services/UsersService';

export default function UsersScreen() {
  const [users, setUsers] = useState([{}])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const d = [] as any[]

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)

        const data = await getUsersData()

        data.forEach((user: any) => {
          d.push({
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            age: user.age,
            gender: user.gender,
            phoneNumber: user.phone,
            address: user.address,
            image: user.image,
          })
        })

        setUsers(d)
      } catch(err) {
        setError('Error') 
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return <CardList data={users} loading={loading} error={error} type='User' />;
}
