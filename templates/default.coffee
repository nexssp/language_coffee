# Nexss PROGRAMMER 2.0.0 - CoffeeScript
# Default template for JSON Data
# STDIN
process.stdin.on 'data', (NexssStdin) ->
  NexssStdout = undefined
  try
    NexssStdout = JSON.parse(NexssStdin.toString())
  catch e
    console.error e
    process.exit 1
  # Modify data
  NexssStdout.test = 'test'
  # STDOUT
  process.stdout.write JSON.stringify(NexssStdout)
  return
process.stdin.on 'end', ->
  #On Windows below is not needed.
  process.exit 0
  return