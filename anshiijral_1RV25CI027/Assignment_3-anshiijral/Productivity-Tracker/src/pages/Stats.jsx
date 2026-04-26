import { Link } from 'react-router-dom'
function Stats({ tasks }) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.completed).length
  const pendingTasks = totalTasks - completedTasks
  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100)

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-5xl font-extrabold tracking-tight text-slate-900">
          Progress Dashboard
        </h2>
        <p className="mt-3 text-lg text-slate-500">
          A quick overview of your productivity.
        </p>
      </div>
      <div className="mb-8 text-center">
  <h1>Progress Dashboard</h1>
  <p>A quick overview of your productivity.</p>

  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginTop: '20px',
      marginBottom: '20px',
    }}
  >
    <Link to="/">Home</Link>
    <Link to="/stats">Stats</Link>
  </div>
</div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-medium text-slate-500">Total Tasks</p>
          <h3 className="mt-2 text-4xl font-bold text-slate-900">{totalTasks}</h3>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-medium text-slate-500">Completed</p>
          <h3 className="mt-2 text-4xl font-bold text-emerald-600">{completedTasks}</h3>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-medium text-slate-500">Pending</p>
          <h3 className="mt-2 text-4xl font-bold text-amber-600">{pendingTasks}</h3>
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">Overall Progress</h3>
          <span className="text-lg font-semibold text-indigo-600">{progress}%</span>
        </div>

        <div className="h-4 w-full rounded-full bg-slate-200">
          <div
            className="h-4 rounded-full bg-indigo-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default Stats