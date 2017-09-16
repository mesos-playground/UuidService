# UuidService

A service that generates a uuid

## generate

Example

```node
seneca.act('role:uuid,cmd:generate,ver:1', (err, res) => {
  /* 
   * Result: {
   *   uuid: <UUID>
   * }
   */
});
```
